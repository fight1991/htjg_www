// 设置系统缩放比，适配各分辨率
export function refreshScale(id = 'app'){
  let baseWidth = document.documentElement.clientWidth;
  let baseHeight = document.documentElement.clientHeight;
  let appStyle = document.getElementById(id).style;
  let realRatio = baseWidth/baseHeight
  let designRatio = 16/9
  let scaleRate =  baseWidth/1920
  if(realRatio>designRatio){
    scaleRate = baseHeight/1080
  }
  appStyle.transformOrigin = 'left top';
  appStyle.transform=`scale(${scaleRate}) translateX(-50%)`;
  appStyle.width = `${baseWidth/scaleRate}px`
}
