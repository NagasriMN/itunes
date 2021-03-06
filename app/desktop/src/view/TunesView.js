Ext.define('ModernTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    cls: 'tunes-view',
    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
 
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')","background-size: cover"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});