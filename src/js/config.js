require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'head':'./head',
        'headser':'header',
        'ban':'jquery.lxCarousel'
    },shim:{'head':['jquery'],
            'headser':['jquery'],
            'ban':['jquery'] 
            }

})