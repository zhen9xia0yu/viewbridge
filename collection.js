    // 从 sessionStorage 获取数据
    const dataFromPageA = sessionStorage.getItem('dataFromPageA');
    if (dataFromPageA) {
      const messageElement = document.createElement('p');
      messageElement.textContent = 'Data from Page A: ' + dataFromPageA;
      document.body.appendChild(messageElement);
    }

    // 返回到页面 A
    document.getElementById('goBack').addEventListener('click', function() {
      window.history.back();
    });