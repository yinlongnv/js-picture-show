window.onload = function() {
  // 图片展示上移效果
  function showDetails() {
    var divHeight = "180px";
    var myDiv = document.getElementById("picList").getElementsByTagName("div");
    for (var i = 0; i < myDiv.length; i++) {
      myDiv[i].onmouseover = showMsg;
      myDiv[i].onmouseout = hideMsg;
    }
    function showMsg() {
      this.getElementsByTagName("a")[0].style.top = 0;
    }
    function hideMsg() {
      this.getElementsByTagName("a")[0].style.top = divHeight;
    }
  }
  showDetails();

  // 图片展示侧位效果
  var lis = document.getElementById("orginImg").getElementsByTagName("li");
  for (i = 0; i < lis.length; i++) {
    lis[i].onmouseover = showDetail;
    lis[i].onmouseout = hideDetail;
  }

  var lastLi;
  lastLi = lis[lis.length - 1];
  lastLi.getElementsByTagName("div")[0].style.left = "auto";
  lastLi.getElementsByTagName("div")[0].style.right = "100%";
  var j = lis.length;
  while (j) {
    if (j % 3 == 0) {
      lastLi = lis[j - 1];
      lastLi.getElementsByTagName("div")[0].style.left = "auto";
      lastLi.getElementsByTagName("div")[0].style.right = "100%";
    }
    j--;
  }

  function showDetail() {
    this.getElementsByTagName("div")[0].style.display = "block";
  }
  function hideDetail() {
    this.getElementsByTagName("div")[0].style.display = "none";
  }
};
