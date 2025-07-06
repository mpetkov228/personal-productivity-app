from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message":"hello world"}

@app.get("/login")
async def login():
    return "login page"

# if __name__ == "__main__":
    # main()