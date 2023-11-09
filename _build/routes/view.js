'use strict';
const a11_0x5de8a1 = a11_0x32a3;
(function (_0xa75009, _0x12a7be) {
    const _0x5af715 = a11_0x32a3, _0x54f711 = _0xa75009();
    while (!![]) {
        try {
            const _0x36c0be = -parseInt(_0x5af715(0x138)) / 0x1 * (-parseInt(_0x5af715(0x140)) / 0x2) + -parseInt(_0x5af715(0x145)) / 0x3 * (parseInt(_0x5af715(0x142)) / 0x4) + parseInt(_0x5af715(0x14f)) / 0x5 * (-parseInt(_0x5af715(0x147)) / 0x6) + -parseInt(_0x5af715(0x139)) / 0x7 + -parseInt(_0x5af715(0x148)) / 0x8 + parseInt(_0x5af715(0x137)) / 0x9 + parseInt(_0x5af715(0x13f)) / 0xa;
            if (_0x36c0be === _0x12a7be)
                break;
            else
                _0x54f711['push'](_0x54f711['shift']());
        } catch (_0x4d14fa) {
            _0x54f711['push'](_0x54f711['shift']());
        }
    }
}(a11_0x2800, 0x50aeb));
function a11_0x2800() {
    const _0x56b2bb = [
        '/signin',
        '2976MNqfwG',
        '4899208rekZLL',
        'flash',
        'toString',
        'notification',
        'render',
        '../models/surat',
        'session',
        '1210WmFaQH',
        '/password',
        'Surat',
        'find',
        'user',
        'redirect',
        '/surat',
        'sort',
        '1585674XGDEOv',
        '58SDKDHH',
        '2405207aSkujN',
        'express',
        'limit',
        '__esModule',
        'query',
        'get',
        '18197110ieMFqv',
        '1954TCdBEt',
        'layout',
        '1292108nzYETg',
        'router',
        'defineProperty',
        '6apznqU'
    ];
    a11_0x2800 = function () {
        return _0x56b2bb;
    };
    return a11_0x2800();
}
Object[a11_0x5de8a1(0x144)](exports, a11_0x5de8a1(0x13c), { 'value': !![] }), exports[a11_0x5de8a1(0x143)] = void 0x0;
const express_1 = require(a11_0x5de8a1(0x13a)), surat_1 = require(a11_0x5de8a1(0x14d));
function a11_0x32a3(_0x1d1143, _0x47e250) {
    const _0x280060 = a11_0x2800();
    return a11_0x32a3 = function (_0x32a3b3, _0x27254f) {
        _0x32a3b3 = _0x32a3b3 - 0x130;
        let _0x32eb7a = _0x280060[_0x32a3b3];
        return _0x32eb7a;
    }, a11_0x32a3(_0x1d1143, _0x47e250);
}
exports[a11_0x5de8a1(0x143)] = (0x0, express_1['Router'])(), exports[a11_0x5de8a1(0x143)][a11_0x5de8a1(0x13e)](a11_0x5de8a1(0x146), async (_0x31ed11, _0x46a408) => {
    const _0x27219d = a11_0x5de8a1;
    if (_0x31ed11[_0x27219d(0x14e)][_0x27219d(0x133)])
        return _0x46a408[_0x27219d(0x134)]('/');
    return _0x46a408[_0x27219d(0x14c)]('user/signin', {
        'layout': _0x27219d(0x141),
        'notification': _0x31ed11[_0x27219d(0x149)](_0x27219d(0x14b))
    });
}), exports[a11_0x5de8a1(0x143)][a11_0x5de8a1(0x13e)](a11_0x5de8a1(0x135), async (_0x18dcf9, _0x372df6) => {
    const _0x59030f = a11_0x5de8a1;
    if (!_0x18dcf9[_0x59030f(0x14e)][_0x59030f(0x133)])
        return _0x372df6[_0x59030f(0x134)](_0x59030f(0x146));
    const {
            category: _0x3a01b5,
            query: _0x804505,
            column: _0x19ac98
        } = _0x18dcf9[_0x59030f(0x13d)], _0x1b47bd = await surat_1[_0x59030f(0x131)][_0x59030f(0x132)]({
            'category': _0x3a01b5,
            [_0x19ac98[_0x59030f(0x14a)]()]: {
                '$regex': _0x804505,
                '$options': 'i'
            }
        });
    return _0x372df6[_0x59030f(0x14c)]('user/surat', {
        'layout': _0x59030f(0x141),
        'notification': _0x18dcf9['flash'](_0x59030f(0x14b)),
        'surats': _0x1b47bd,
        'category': _0x3a01b5,
        'query': _0x804505,
        'column': _0x19ac98
    });
}), exports[a11_0x5de8a1(0x143)][a11_0x5de8a1(0x13e)](a11_0x5de8a1(0x130), async (_0x47b46b, _0x5a6f33) => {
    const _0x3e1ab8 = a11_0x5de8a1;
    if (!_0x47b46b[_0x3e1ab8(0x14e)]['user'])
        return _0x5a6f33['redirect'](_0x3e1ab8(0x146));
    return _0x5a6f33[_0x3e1ab8(0x14c)]('user/password', {
        'layout': 'layout',
        'notification': _0x47b46b[_0x3e1ab8(0x149)]('notification')
    });
}), exports[a11_0x5de8a1(0x143)][a11_0x5de8a1(0x13e)]('/', async (_0x5e6ea5, _0x576ec7) => {
    const _0x5a7574 = a11_0x5de8a1;
    if (!_0x5e6ea5['session'][_0x5a7574(0x133)])
        return _0x576ec7['redirect'](_0x5a7574(0x146));
    const _0x36dcab = await surat_1[_0x5a7574(0x131)][_0x5a7574(0x132)]({ 'category': 'Surat\x20Masuk' })['count'](), _0xb97f43 = await surat_1[_0x5a7574(0x131)][_0x5a7574(0x132)]({ 'category': 'Surat\x20Keluar' })['count'](), _0x18b27f = await surat_1[_0x5a7574(0x131)][_0x5a7574(0x132)]()[_0x5a7574(0x136)]({ '_id': -0x1 })[_0x5a7574(0x13b)](0x6);
    return _0x576ec7[_0x5a7574(0x14c)]('user/index', {
        'layout': _0x5a7574(0x141),
        'notification': _0x5e6ea5[_0x5a7574(0x149)](_0x5a7574(0x14b)),
        'suratMasukCount': _0x36dcab,
        'suratKeluarCount': _0xb97f43,
        'surats': _0x18b27f
    });
});