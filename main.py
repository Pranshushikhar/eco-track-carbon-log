from fastapi import FastAPI

app = FastAPI()

reports = [
    {"id": 1, "category": "Air Pollution"},
    {"id": 2, "category": "Water Pollution"},
    {"id": 3, "category": "Waste Management"},
]

@app.get("/reports")
def get_reports(category: str = None):
    if category:
        return [r for r in reports if r["category"].lower() == category.lower()]
    return reports
