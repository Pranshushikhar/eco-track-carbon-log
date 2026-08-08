from fastapi import FastAPI

app = FastAPI()

# Sample data
reports = [
    {"id": 1, "category": "Air Pollution", "location": "Delhi", "severity": "High"},
    {"id": 2, "category": "Water Pollution", "location": "Mumbai", "severity": "Medium"},
    {"id": 3, "category": "Waste Management", "location": "Chennai", "severity": "Low"},
    {"id": 4, "category": "Air Pollution", "location": "Delhi", "severity": "Low"},
]

@app.get("/reports")
def get_reports(category: str = None, location: str = None, severity: str = None):

    result = reports

    if category:
        result = [r for r in result if r["category"].lower() == category.lower()]

    if location:
        result = [r for r in result if r["location"].lower() == location.lower()]

    if severity:
        result = [r for r in result if r["severity"].lower() == severity.lower()]

    return result
