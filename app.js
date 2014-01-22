Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello ExtJs',
                    html : 'Hello WORLD! - Rukelnikov'
                }
            ]
        });
    }
});