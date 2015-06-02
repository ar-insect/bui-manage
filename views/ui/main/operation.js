$('#J_OpenMenu').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        //打开左侧菜单中配置过的页面
        top.topManager.openPage({
            id: 'main-menu',
            search: 'a=123&b=456',
            reload: true
        });
    }
});

$('#J_OpenRelative').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        //打开左侧菜单中配置过的页面
        top.topManager.openPage({
            id: 'test1',
            href: 'main/test.html',
            title: '相对地址页面'
        });
    }
});

$('#J_OpenAbsolute').click(function (e) {
    e.preventDefault();
    if (top.topManager) {

        top.topManager.openPage({
            id: 'baidu',
            href: 'http://www.baidu.com',
            title: '百度页面'
        });
    }
});

$('#J_Refresh').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        top.topManager.reloadPage();
    }
});

$('#J_RefreshOther').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        top.topManager.reloadPage('main-menu');
    }
});
$('#J_Close').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        top.topManager.closePage();
    }
});

$('#J_CloseOther').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        top.topManager.closePage('main-menu');
    }
});

$('#J_OpenAndClose').click(function (e) {
    e.preventDefault();
    if (top.topManager) {
        top.topManager.openPage({
            id: 'main-menu',
            isClose: true
        });
    }
});

$('#btnTitle').click(function () {
    if (top.topManager) {
        top.topManager.setPageTitle($('#txtTitle').val());
    }
});