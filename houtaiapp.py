from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/软件项目.html')  # 定义路由
def software_project():
    folder_path = "./软件项目"  # 文件夹路径

    # 获取文件夹中的文件列表
    file_list = os.listdir(folder_path)

    return render_template('index.html', files=file_list)
app = Flask(__name__, template_folder='templates')
