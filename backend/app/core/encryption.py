
from cryptography.fernet import Fernet
from hashlib import sha256
import base64
from core.config import settings

# Get the JWT_SECRET_KEY from the environment
DB_SECRET_KEY = settings.DB_SECRET_KEY

# Hash JWT_SECRET_KEY for a 32-byte Fernet encryption key
hashed_key = sha256(DB_SECRET_KEY.encode()).digest()
cipher = Fernet(base64.urlsafe_b64encode(hashed_key))

def encrypt(text: str) -> str:
    return cipher.encrypt(text.encode()).decode()

def decrypt(token: str) -> str:
    return cipher.decrypt(token.encode()).decode()
def hash_lookup(text: str) -> str:      # to check for similar values
    return sha256(text.encode()).hexdigest()

patient_hash = hash_lookup("patient")
doctor_hash = hash_lookup("doctor")
admin_hash = hash_lookup("admin")
user_hash = hash_lookup("user")