#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <DHT.h>

// ===============================
// 1. WiFi & Server Setup
// ===============================
const char* ssid = "pawansai";           // Your WiFi Name
const char* password = "keerthyismyangel";  // Your WiFi Password

// IMPORTANT: Keep the http:// and the :8000/api/sensors part!
const char* serverName = "http://192.168.43.149:8000/api/sensors"; 

// ===============================
// 2. Sensor Pin Definitions1
// ===============================
#define DHTPIN D1         // Changed to D1
#define DHTTYPE DHT11
#define RAIN_DO D5        // Rain Digital
#define RAIN_AO A0        // Rain Analog
#define MOISTURE_DO D6    // Moisture Digital

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  delay(1000);
  
  pinMode(RAIN_DO, INPUT);
  pinMode(MOISTURE_DO, INPUT);
  
  dht.begin();

  Serial.print("Connecting to WiFi: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nWiFi connected!");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;

    float t = dht.readTemperature();
    float h = dht.readHumidity();
    
    // Read sensors based on your test code
    int rainState = digitalRead(RAIN_DO);
    int rainValue = analogRead(RAIN_AO); // (Optional: you can also map this to a percentage if you want)
    int moistureState = digitalRead(MOISTURE_DO);

    // Format states to text
    String moistureStr = (moistureState == LOW) ? "Wet" : "Dry";
    String rainStr = (rainState == LOW) ? "Rain Detected" : "No Rain";

    String jsonPayload = "{";
    jsonPayload += "\"temperature\": \"" + String(isnan(t) ? 0 : t, 1) + "°C\",";
    jsonPayload += "\"humidity\": \"" + String(isnan(h) ? 0 : h, 1) + "%\",";
    jsonPayload += "\"windSpeed\": \"12 km/h\","; 
    jsonPayload += "\"rainfall\": \"" + rainStr + "\",";
    jsonPayload += "\"soilMoisture\": \"" + moistureStr + "\",";
    jsonPayload += "\"soilTemp\": \"" + String(isnan(t) ? 0 : t - 2.0, 1) + "°C\"";
    jsonPayload += "}";

    Serial.println("Sending to Backend:");
    Serial.println(jsonPayload);

    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    
    int httpResponseCode = http.POST(jsonPayload);
    
    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  }
  delay(2000);
}
