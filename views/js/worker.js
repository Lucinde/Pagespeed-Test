this.onmessage = function (e){
  var items = e.data.items;
  var scrollTop = e.data.scrollTop;

  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
  postMessage(items);
}
