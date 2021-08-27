/*Ext.define('ModernTunes.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  data: {
    clickTime : Date.now()
  },
  stores: {
  }
}) */

Ext.define('ModernTunes.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
      'ModernTunes.model.Tune'
      ],
    
      stores: {
        tunes: {
            model: 'ModernTunes.model.Tune',
            autoLoad: true,
            sorters: ['artist', 'title']
        }
      }
    }
        );
/*stores: {
  tunes: {
      model: 'ModernTunes.model.Tune',
      autoLoad: true,
      bind: {
        store: '{tunes}'
     }
  }
} */

      

 /* stores: {
      tunes: {
          model: 'ModernTunes.model.Tune',
          autoLoad: true,
          bind: {
            store: '{tunes}'
         }
      }
  }*/

  /*stores: {
    tunes: {
        model: 'ModernTunes.model.Tune',
        autoLoad: true,
        sorters: ['artist', 'title']
    }
  } */


