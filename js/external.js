/* REL=EXTERNAL LINKS OPEN IN A NEW WINDOW */
var links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {
  if (links[i].rel == 'external') {
    links[i].onclick = function(){window.open(this.href);return false;};
  }
}
