(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            clientWidth = clientWidth > 1200 ? 1200 : clientWidth;
            if (!clientWidth) return;
            if (clientWidth < 768) {
                docEl.style.fontSize = '12px';
            } else {
                var size = 10 + 4 * (clientWidth - 768) / 432;
                docEl.style.fontSize = size + 'px';
            }

        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);