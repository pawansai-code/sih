from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI(title="Smart Farming Assistant API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connection Manager to handle broadcasting messages to all connected React clients
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except Exception as e:
                print(f"Error sending to client: {e}")

manager = ConnectionManager()

# Define the expected JSON format from the ESP32
class SensorData(BaseModel):
    temperature: str
    humidity: str
    windSpeed: str
    rainfall: str
    soilMoisture: str
    soilTemp: str

@app.get("/")
def read_root():
    return {"status": "online", "message": "Smart Farming Backend is running!"}

# --- HTTP POST ENDPOINT FOR ESP32 ---
@app.post("/api/sensors")
async def receive_sensor_data(data: SensorData):
    # 1. Log the data to the terminal so you can see it
    print("--- NEW SENSOR DATA RECEIVED FROM ESP32 ---")
    print(f"Temperature: {data.temperature}")
    print(f"Humidity: {data.humidity}")
    print(f"Soil Moisture: {data.soilMoisture}")
    print(f"Rainfall: {data.rainfall}")
    print("-------------------------------------------")

    # 2. Broadcast the live data to the frontend via WebSockets
    await manager.broadcast(data.dict())

    return {"status": "success", "message": "Data received and broadcasted"}

# --- WEBSOCKET ENDPOINT FOR REACT FRONTEND ---
@app.websocket("/ws/sensors")
async def sensor_websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    print("React Client connected to sensor websocket.")
    try:
        while True:
            # Keep the connection open indefinitely
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        print("React Client disconnected from sensor websocket.")
