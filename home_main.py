# home_main.py
from flask import Flask

# 현재 디렉터리를 정적 폴더로 사용
app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    # 루트 접속 시 main.html 반환
    return app.send_static_file('main.html')

if __name__ == '__main__':
    # 외부 접근 허용 host/port
    app.run(host='0.0.0.0', port=5555, debug=True)
