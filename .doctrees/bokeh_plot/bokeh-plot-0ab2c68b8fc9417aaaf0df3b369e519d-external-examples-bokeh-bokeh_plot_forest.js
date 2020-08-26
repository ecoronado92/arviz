(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("0af61d82-70e5-43e4-adf6-c61f870fb55c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0af61d82-70e5-43e4-adf6-c61f870fb55c' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js": "jtq3UzIrk2TfDZfSNGEN0ICKrRWmtzZSQm6i1Xnd3hY3UfU9m98vuEL7JUv7Iway", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js": "rRlSZb4FImflqQNhKcvkZq8b+FqcNFxP9CmCO8Vgo9uNXe6wk6yNMlKMrXn+TjeM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js": "MJyUmyL5f4wPlABPEp4CF5HzMeAPMvzucE8gEGNH15tAWgHFb2hsPNIEkva89XtP"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fec51677-5d94-49c0-ba00-2495630709e8":{"roots":{"references":[{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62579","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"62650","type":"Circle"},{"attributes":{},"id":"62679","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62648"},"glyph":{"id":"62649"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62650"},"selection_glyph":null,"view":{"id":"62652"}},"id":"62651","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"62590","type":"Circle"},{"attributes":{"data_source":{"id":"62583"},"glyph":{"id":"62584"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62585"},"selection_glyph":null,"view":{"id":"62587"}},"id":"62586","type":"GlyphRenderer"},{"attributes":{},"id":"62680","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62580","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62584","type":"Line"},{"attributes":{"source":{"id":"62648"}},"id":"62652","type":"CDSView"},{"attributes":{"source":{"id":"62578"}},"id":"62582","type":"CDSView"},{"attributes":{"data_source":{"id":"62553"},"glyph":{"id":"62554"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62555"},"selection_glyph":null,"view":{"id":"62557"}},"id":"62556","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62594","type":"Line"},{"attributes":{},"id":"62665","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"62589","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"62686"},"selection_policy":{"id":"62685"}},"id":"62583","type":"ColumnDataSource"},{"attributes":{},"id":"62666","type":"Selection"},{"attributes":{"source":{"id":"62583"}},"id":"62587","type":"CDSView"},{"attributes":{"data_source":{"id":"62543"},"glyph":{"id":"62544"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62545"},"selection_glyph":null,"view":{"id":"62547"}},"id":"62546","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62585","type":"Line"},{"attributes":{},"id":"62681","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62588"},"glyph":{"id":"62589"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62590"},"selection_glyph":null,"view":{"id":"62592"}},"id":"62591","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"62544","type":"Circle"},{"attributes":{},"id":"62682","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"62653","type":"Title"},{"attributes":{"data_source":{"id":"62598"},"glyph":{"id":"62599"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62600"},"selection_glyph":null,"view":{"id":"62602"}},"id":"62601","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"62656","type":"DataRange1d"},{"attributes":{"data":{},"selected":{"id":"62688"},"selection_policy":{"id":"62687"}},"id":"62588","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62535","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"62696"},"selection_policy":{"id":"62695"}},"id":"62608","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62540","type":"Line"},{"attributes":{"source":{"id":"62588"}},"id":"62592","type":"CDSView"},{"attributes":{"source":{"id":"62538"}},"id":"62542","type":"CDSView"},{"attributes":{},"id":"62667","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62608"},"glyph":{"id":"62609"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62610"},"selection_glyph":null,"view":{"id":"62612"}},"id":"62611","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62539","type":"Line"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"62668"},"selection_policy":{"id":"62667"}},"id":"62538","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62599","type":"Line"},{"attributes":{},"id":"62668","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62609","type":"Line"},{"attributes":{"source":{"id":"62593"}},"id":"62597","type":"CDSView"},{"attributes":{},"id":"62683","type":"UnionRenderers"},{"attributes":{"source":{"id":"62533"}},"id":"62537","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62595","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"62605","type":"Circle"},{"attributes":{},"id":"62684","type":"Selection"},{"attributes":{"data_source":{"id":"62538"},"glyph":{"id":"62539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62540"},"selection_glyph":null,"view":{"id":"62542"}},"id":"62541","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"62690"},"selection_policy":{"id":"62689"}},"id":"62593","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"62604","type":"Circle"},{"attributes":{"axis":{"id":"62506"},"ticker":null},"id":"62509","type":"Grid"},{"attributes":{"data":{},"selected":{"id":"62670"},"selection_policy":{"id":"62669"}},"id":"62543","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"62692"},"selection_policy":{"id":"62691"}},"id":"62598","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62598"}},"id":"62602","type":"CDSView"},{"attributes":{},"id":"62519","type":"UndoTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62549","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62600","type":"Line"},{"attributes":{},"id":"62504","type":"LinearScale"},{"attributes":{"data_source":{"id":"62603"},"glyph":{"id":"62604"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62605"},"selection_glyph":null,"view":{"id":"62607"}},"id":"62606","type":"GlyphRenderer"},{"attributes":{},"id":"62669","type":"UnionRenderers"},{"attributes":{},"id":"62670","type":"Selection"},{"attributes":{"data_source":{"id":"62613"},"glyph":{"id":"62614"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62615"},"selection_glyph":null,"view":{"id":"62617"}},"id":"62616","type":"GlyphRenderer"},{"attributes":{},"id":"62507","type":"BasicTicker"},{"attributes":{"formatter":{"id":"62661"},"ticker":{"id":"62507"}},"id":"62506","type":"LinearAxis"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"62666"},"selection_policy":{"id":"62665"}},"id":"62533","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"62694"},"selection_policy":{"id":"62693"}},"id":"62603","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"62702"},"selection_policy":{"id":"62701"}},"id":"62623","type":"ColumnDataSource"},{"attributes":{},"id":"62685","type":"UnionRenderers"},{"attributes":{"source":{"id":"62603"}},"id":"62607","type":"CDSView"},{"attributes":{},"id":"62686","type":"Selection"},{"attributes":{},"id":"62515","type":"PanTool"},{"attributes":{"data_source":{"id":"62623"},"glyph":{"id":"62624"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62625"},"selection_glyph":null,"view":{"id":"62627"}},"id":"62626","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62614","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"62545","type":"Circle"},{"attributes":{"formatter":{"id":"62660"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"62657"}},"id":"62510","type":"LinearAxis"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62624","type":"Line"},{"attributes":{},"id":"62514","type":"ResetTool"},{"attributes":{"source":{"id":"62608"}},"id":"62612","type":"CDSView"},{"attributes":{},"id":"62671","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"62521","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62610","type":"Line"},{"attributes":{},"id":"62520","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"62620","type":"Circle"},{"attributes":{},"id":"62672","type":"Selection"},{"attributes":{"overlay":{"id":"62522"}},"id":"62516","type":"BoxZoomTool"},{"attributes":{},"id":"62517","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"62619","type":"Circle"},{"attributes":{},"id":"62687","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"62678"},"selection_policy":{"id":"62677"}},"id":"62563","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"62698"},"selection_policy":{"id":"62697"}},"id":"62613","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62613"}},"id":"62617","type":"CDSView"},{"attributes":{},"id":"62688","type":"Selection"},{"attributes":{"overlay":{"id":"62523"}},"id":"62518","type":"LassoSelectTool"},{"attributes":{"source":{"id":"62543"}},"id":"62547","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62615","type":"Line"},{"attributes":{"data_source":{"id":"62618"},"glyph":{"id":"62619"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62620"},"selection_glyph":null,"view":{"id":"62622"}},"id":"62621","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"62563"},"glyph":{"id":"62564"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62565"},"selection_glyph":null,"view":{"id":"62567"}},"id":"62566","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62534","type":"Line"},{"attributes":{"data_source":{"id":"62628"},"glyph":{"id":"62629"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62630"},"selection_glyph":null,"view":{"id":"62632"}},"id":"62631","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"62522","type":"BoxAnnotation"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62554","type":"Line"},{"attributes":{"data_source":{"id":"62578"},"glyph":{"id":"62579"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62580"},"selection_glyph":null,"view":{"id":"62582"}},"id":"62581","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"62700"},"selection_policy":{"id":"62699"}},"id":"62618","type":"ColumnDataSource"},{"attributes":{},"id":"62673","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"62524"}],"tools":[{"id":"62514"},{"id":"62515"},{"id":"62516"},{"id":"62517"},{"id":"62518"},{"id":"62519"},{"id":"62520"},{"id":"62521"}]},"id":"62715","type":"ProxyToolbar"},{"attributes":{"source":{"id":"62548"}},"id":"62552","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"62708"},"selection_policy":{"id":"62707"}},"id":"62638","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"62672"},"selection_policy":{"id":"62671"}},"id":"62548","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62550","type":"Line"},{"attributes":{"source":{"id":"62618"}},"id":"62622","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"62560","type":"Circle"},{"attributes":{},"id":"62674","type":"Selection"},{"attributes":{"data_source":{"id":"62638"},"glyph":{"id":"62639"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62640"},"selection_glyph":null,"view":{"id":"62642"}},"id":"62641","type":"GlyphRenderer"},{"attributes":{},"id":"62689","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"62559","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62629","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"62674"},"selection_policy":{"id":"62673"}},"id":"62553","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62639","type":"Line"},{"attributes":{},"id":"62690","type":"Selection"},{"attributes":{"source":{"id":"62553"}},"id":"62557","type":"CDSView"},{"attributes":{"source":{"id":"62623"}},"id":"62627","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62555","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62625","type":"Line"},{"attributes":{"data_source":{"id":"62558"},"glyph":{"id":"62559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62560"},"selection_glyph":null,"view":{"id":"62562"}},"id":"62561","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"62635","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"62523","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"62684"},"selection_policy":{"id":"62683"}},"id":"62578","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"62634","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"62676"},"selection_policy":{"id":"62675"}},"id":"62558","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"62704"},"selection_policy":{"id":"62703"}},"id":"62628","type":"ColumnDataSource"},{"attributes":{},"id":"62675","type":"UnionRenderers"},{"attributes":{"source":{"id":"62628"}},"id":"62632","type":"CDSView"},{"attributes":{},"id":"62676","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"62514"},{"id":"62515"},{"id":"62516"},{"id":"62517"},{"id":"62518"},{"id":"62519"},{"id":"62520"},{"id":"62521"}]},"id":"62524","type":"Toolbar"},{"attributes":{"axis":{"id":"62510"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"62513","type":"Grid"},{"attributes":{"source":{"id":"62558"}},"id":"62562","type":"CDSView"},{"attributes":{"data_source":{"id":"62633"},"glyph":{"id":"62634"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62635"},"selection_glyph":null,"view":{"id":"62637"}},"id":"62636","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62564","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62630","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"62574","type":"Circle"},{"attributes":{},"id":"62691","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62568"},"glyph":{"id":"62569"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62570"},"selection_glyph":null,"view":{"id":"62572"}},"id":"62571","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"62643"},"glyph":{"id":"62644"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62645"},"selection_glyph":null,"view":{"id":"62647"}},"id":"62646","type":"GlyphRenderer"},{"attributes":{},"id":"62692","type":"Selection"},{"attributes":{"data_source":{"id":"62593"},"glyph":{"id":"62594"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62595"},"selection_glyph":null,"view":{"id":"62597"}},"id":"62596","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"62706"},"selection_policy":{"id":"62705"}},"id":"62633","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","min_interval":1},"id":"62655","type":"DataRange1d"},{"attributes":{"source":{"id":"62563"}},"id":"62567","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62565","type":"Line"},{"attributes":{"source":{"id":"62633"}},"id":"62637","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"62575","type":"Circle"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"62657","type":"FixedTicker"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"62680"},"selection_policy":{"id":"62679"}},"id":"62568","type":"ColumnDataSource"},{"attributes":{},"id":"62677","type":"UnionRenderers"},{"attributes":{},"id":"62502","type":"LinearScale"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62644","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62569","type":"Line"},{"attributes":{},"id":"62678","type":"Selection"},{"attributes":{"source":{"id":"62568"}},"id":"62572","type":"CDSView"},{"attributes":{"source":{"id":"62638"}},"id":"62642","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62570","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"62640","type":"Line"},{"attributes":{},"id":"62693","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62573"},"glyph":{"id":"62574"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62575"},"selection_glyph":null,"view":{"id":"62577"}},"id":"62576","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"62712"},"selection_policy":{"id":"62711"}},"id":"62648","type":"ColumnDataSource"},{"attributes":{},"id":"62694","type":"Selection"},{"attributes":{"source":{"id":"62573"}},"id":"62577","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"62645","type":"Line"},{"attributes":{"data":{},"selected":{"id":"62682"},"selection_policy":{"id":"62681"}},"id":"62573","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"62710"},"selection_policy":{"id":"62709"}},"id":"62643","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62643"}},"id":"62647","type":"CDSView"},{"attributes":{"toolbar":{"id":"62715"},"toolbar_location":"above"},"id":"62716","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"62649","type":"Circle"},{"attributes":{"children":[[{"id":"62497"},0,0]]},"id":"62714","type":"GridBox"},{"attributes":{"data_source":{"id":"62548"},"glyph":{"id":"62549"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62550"},"selection_glyph":null,"view":{"id":"62552"}},"id":"62551","type":"GlyphRenderer"},{"attributes":{},"id":"62695","type":"UnionRenderers"},{"attributes":{},"id":"62696","type":"Selection"},{"attributes":{},"id":"62711","type":"UnionRenderers"},{"attributes":{},"id":"62712","type":"Selection"},{"attributes":{"below":[{"id":"62506"}],"center":[{"id":"62509"},{"id":"62513"}],"left":[{"id":"62510"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"62536"},{"id":"62541"},{"id":"62546"},{"id":"62551"},{"id":"62556"},{"id":"62561"},{"id":"62566"},{"id":"62571"},{"id":"62576"},{"id":"62581"},{"id":"62586"},{"id":"62591"},{"id":"62596"},{"id":"62601"},{"id":"62606"},{"id":"62611"},{"id":"62616"},{"id":"62621"},{"id":"62626"},{"id":"62631"},{"id":"62636"},{"id":"62641"},{"id":"62646"},{"id":"62651"}],"title":{"id":"62653"},"toolbar":{"id":"62524"},"toolbar_location":null,"x_range":{"id":"62655"},"x_scale":{"id":"62502"},"y_range":{"id":"62656"},"y_scale":{"id":"62504"}},"id":"62497","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"62660","type":"BasicTickFormatter"},{"attributes":{},"id":"62697","type":"UnionRenderers"},{"attributes":{},"id":"62661","type":"BasicTickFormatter"},{"attributes":{},"id":"62698","type":"Selection"},{"attributes":{"data_source":{"id":"62533"},"glyph":{"id":"62534"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62535"},"selection_glyph":null,"view":{"id":"62537"}},"id":"62536","type":"GlyphRenderer"},{"attributes":{},"id":"62699","type":"UnionRenderers"},{"attributes":{},"id":"62700","type":"Selection"},{"attributes":{"children":[{"id":"62716"},{"id":"62714"}]},"id":"62717","type":"Column"},{"attributes":{},"id":"62701","type":"UnionRenderers"},{"attributes":{},"id":"62702","type":"Selection"},{"attributes":{},"id":"62703","type":"UnionRenderers"},{"attributes":{},"id":"62704","type":"Selection"},{"attributes":{},"id":"62705","type":"UnionRenderers"},{"attributes":{},"id":"62706","type":"Selection"},{"attributes":{},"id":"62707","type":"UnionRenderers"},{"attributes":{},"id":"62708","type":"Selection"},{"attributes":{},"id":"62709","type":"UnionRenderers"},{"attributes":{},"id":"62710","type":"Selection"}],"root_ids":["62717"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"fec51677-5d94-49c0-ba00-2495630709e8","root_ids":["62717"],"roots":{"62717":"0af61d82-70e5-43e4-adf6-c61f870fb55c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();