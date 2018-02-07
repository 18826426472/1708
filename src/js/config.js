require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'head':'./head',
        'headser':'header',
        'ban':'jquery.lxCarousel',
        'common':'common',
        'gdsZoom':'jquery.gdsZoom'
    },shim:{'head':['jquery'],
            'headser':['jquery','head'],
            'ban':['jquery'],
            'gdsZoom':['jquery'],
            'common':['jquery']
            }

})