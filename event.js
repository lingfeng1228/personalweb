
/*切换简历文件的显示与隐藏状态*/
//Switch the display and hid state of the resume file
    function showResume() {     //点击按钮时执行的事件处理程序  The event handler that is executed when the button is clicked.
        //获取页面上的简历部分元素 Get the resume section elements on the page
        var resumeDiv = document.getElementById("resume");
        var resumeButton = document.getElementById("resumeButton");
       //控制显示和隐藏 Control  the display and hide.
        if (resumeDiv.style.display === "none") {
            resumeDiv.style.display = "block";
            resumeButton.innerHTML = '<i class="button-icon" style="background-image: url(\'./images/个人简历.png\');"></i>';
        } else {
            resumeDiv.style.display = "none";
            resumeButton.innerHTML = '<i class="button-icon" style="background-image: url(\'./images/个人简历.png\');"></i>';
        }
    }

//显示项目经历的下拉隐藏设置

     function showExperience() {
     //获取具有"IDdropdownContent"的下拉菜单元素  Get the dropdown menu elements with "dropdownContent"
            var dropdownContent = document.getElementById("dropdownContent");
           //使用"classList.toggle"切换显示状态    Use "classList.toggle" to change the display state
            dropdownContent.classList.toggle("show");
        }

        function showDropdownContent() {
        //获取具有"dropdownContent"的下拉菜单元素 Get the dropdown menu elements with "dropdownContent"
            var dropdownContent = document.getElementById("dropdownContent");
           //移除“show”类名来强制隐藏  Remove the "show" class name to force hide.
            dropdownContent.classList.remove("show");
        }
    //点击操作后触发该事件 trigger this event after a click operation.
        window.onclick = function (event) {
            if (!event.target.matches('.button-icon')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        // 获取文件夹的文件列表
  fetch('./软件项目')
    .then(response => response.text())
    .then(data => {
      // 解析文件列表数据
      const fileList = data.split('\n');

      // 创建文件列表的HTML
      let html = '<ul>';
      fileList.forEach(file => {
        if (file.trim() !== '') {
          html += `<li>${file}</li>`;
        }
      });
      html += '</ul>';

      // 将文件列表插入到页面中
      document.getElementById('fileList').innerHTML = html;
    })
    .catch(error => console.error(error));

    // 获取文件夹的文件列表
  fetch('./软件项目')
    .then(response => response.text())
    .then(data => {
      // 解析文件列表数据
      const fileList = data.split('\n');

      // 创建文件列表的HTML
      let html = '';
      fileList.forEach(file => {
        if (file.trim() !== '') {
          html += `<li>${file}</li>`;
        }
      });

      // 将文件列表插入到页面中
      document.getElementById('fileList').innerHTML = html;
    })
    .catch(error => console.error(error));

    //创建项目

    var errorMessageElement = document.getElementById('errorMessage'); //获取错误提示元素
    //用于显示密码输入框
    function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'block';
    errorMessageElement.style.display = 'none';  // 隐藏错误提示
  }
//隐藏密码输入框
  function hidePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
  }
//验证密码是否正确并执行相应操作
 function checkPassword() {
    var password = document.getElementById('passwordInput').value;

    if (password === '123456') {
      createMarkdownFile();
      document.getElementById('passwordModal').style.display = 'none';
      errorMessageElement.style.display = 'none';  // 隐藏错误提示
    } else {
       document.getElementById('errorMessage').innerHTML = '密码错误'; // 显示错误提示
      setTimeout(function() {
       errorMessageElement.style.display = 'none';  // 5秒后隐藏错误提示
      }, 5000);
    }
  }

//显示和隐藏弹出框，并在密码正确时调用显示函数
var createFileModal = document.getElementById('createFileModal');

function showCreateFileModal() {
  createFileModal.style.display = 'block';
}

function hideCreateFileModal() {
  createFileModal.style.display = 'none';
}


//创建Markdown文件
  function createMarkdownFile() {
    // 在这里执行创建Markdown文件的操作
    // 可以使用JavaScript的文件写入功能或者向服务器发送请求进行文件创建操作
  }

  function createFile() {
  var fileName = document.getElementById('fileNameInput').value;

  // 确保文件名不为空
  if (!fileName) {
    alert('请输入文件名');
    return;
  }

  // 在这里向服务器发送请求创建文件
  // 可以使用 AJAX 或者 Fetch API 发送请求
  // 创建成功后，关闭弹出框
  hideCreateFileModal();
}

var editor = editormd('editor', {
  width: '60%',  // 宽度为页面的60%
  height: 640,   // 高度为640px
  path: '//cdn.jsdelivr.net/npm/editor.md@1.5.0/lib/',  // Editor.md所需文件的路径
  // 其他Editor.md的配置项
});

/*当鼠标在文件列表容器上移动时，我们可以在 JavaScript 中监听 mousemove 事件，
并根据鼠标在页面的位置来判断当前是在哪个部分*/
var fileList = document.querySelector('.file-list');
var centerContent = document.querySelector('.center-content');

fileList.addEventListener('mousemove', function(e) {
  var mouseY = e.clientY;

  if (mouseY < fileList.getBoundingClientRect().bottom && mouseY > fileList.getBoundingClientRect().top) {
    fileList.style.pointerEvents = 'auto';  // 只滚动文件列表容器
    centerContent.style.pointerEvents = 'none';
  } else if (mouseY < centerContent.getBoundingClientRect().bottom && mouseY > centerContent.getBoundingClientRect().top) {
    fileList.style.pointerEvents = 'none';
    centerContent.style.pointerEvents = 'auto';  // 只滚动中间内容容器
  }
});
/*我们首先获取到文件列表容器和中间内容容器的元素，并分别监听它们的 mousemove 事件。
在事件回调函数中，我们获取到鼠标在页面上的位置，并根据它来判断当前鼠标在哪个部分。
如果鼠标在文件列表容器上，就将列表容器的 pointer-events 属性设置为 auto，这样当鼠标滚动时只会滚动这一部分。
如果鼠标在中间内容容器上，就将中间内容容器的 pointer-events 属性设置为 auto，这样当鼠标滚动时只会滚动这一部分。
在监听完 mousemove 事件之后，你还需要将文件列表容器和中间内容容器的 pointer-events 属性初始值设为 auto，
这样在加载页面时这两个容器都是可以滚动的。*/

