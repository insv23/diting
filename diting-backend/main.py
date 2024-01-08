from fastapi import FastAPI, Request, responses
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://45.152.64.68:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post('/upload')
async def upload(request: Request):
    print('Received a request from: ', request.client)
    form = await request.form()
    file_content = await form['file'].read()
    words = await form['words'].read()
    print(file_content, words)
