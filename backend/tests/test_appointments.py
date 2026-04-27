import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://ecatepec-dental-lab.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
def test_root(client):
    r = client.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    assert "message" in r.json()


# POST appointment valid
def test_create_appointment_valid(client):
    payload = {
        "name": "TEST_Maria Lopez",
        "phone": "5512345678",
        "service": "Rehabilitación Dental",
        "preferred_date": "2026-02-10",
        "message": "Necesito valoración"
    }
    r = client.post(f"{API}/appointments", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 10
    assert "_id" not in data
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["service"] == payload["service"]
    assert data["status"] == "pending"
    assert "created_at" in data


# POST invalid payload returns 422
def test_create_appointment_invalid_missing_fields(client):
    r = client.post(f"{API}/appointments", json={"name": "A"}, timeout=15)
    assert r.status_code == 422


def test_create_appointment_invalid_short_name(client):
    r = client.post(f"{API}/appointments", json={"name": "A", "phone": "55123", "service": "X"}, timeout=15)
    # name min 2, phone min 7, service min 2
    assert r.status_code == 422


# GET list appointments
def test_list_appointments(client):
    # Create one first
    client.post(f"{API}/appointments", json={
        "name": "TEST_GetUser",
        "phone": "5599999999",
        "service": "Estética Dental"
    }, timeout=15)
    r = client.get(f"{API}/appointments", timeout=15)
    assert r.status_code == 200
    items = r.json()
    assert isinstance(items, list)
    assert len(items) >= 1
    for it in items:
        assert "_id" not in it
        assert "id" in it
        assert "created_at" in it
    # Newest first: our TEST_GetUser should appear near top
    top_names = [i["name"] for i in items[:5]]
    assert any("TEST_" in n for n in top_names)
