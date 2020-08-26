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
    
      
      
    
      var element = document.getElementById("e3f64c1f-8af0-441c-b212-5cb19f2df091");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3f64c1f-8af0-441c-b212-5cb19f2df091' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1fd25486-8e8f-49bf-b704-0948007eae00":{"roots":{"references":[{"attributes":{},"id":"61699","type":"ResetTool"},{"attributes":{},"id":"61679","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"61732","type":"BoxAnnotation"},{"attributes":{},"id":"61723","type":"BasicTicker"},{"attributes":{},"id":"61726","type":"PanTool"},{"attributes":{},"id":"61779","type":"Selection"},{"attributes":{"data_source":{"id":"61756"},"glyph":{"id":"61757"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61758"},"selection_glyph":null,"view":{"id":"61760"}},"id":"61759","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"61701"}},"id":"61697","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"61755"}]},"id":"61754","type":"Legend"},{"attributes":{},"id":"61770","type":"BasicTickFormatter"},{"attributes":{},"id":"61729","type":"SaveTool"},{"attributes":{},"id":"61747","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"61687"},"ticker":null},"id":"61690","type":"Grid"},{"attributes":{"formatter":{"id":"61749"},"ticker":{"id":"61688"}},"id":"61687","type":"LinearAxis"},{"attributes":{},"id":"61727","type":"WheelZoomTool"},{"attributes":{},"id":"61683","type":"LinearScale"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"uB6F61G4jj9U46WbxCCwP4cW2c73U8M/WmQ730+Nxz/l0CLb+X7KP8/3U+Olm8Q/SgwCK4cWuT8ZBFYOLbKtP+xRuB6F66E/nMQgsHJokT/6fmq8dJN4P/yp8dJNYnA//Knx0k1iUD8=","dtype":"float64","order":"little","shape":[13]}},"selected":{"id":"61753"},"selection_policy":{"id":"61752"}},"id":"61740","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"61765","type":"Title"},{"attributes":{},"id":"61688","type":"BasicTicker"},{"attributes":{},"id":"61752","type":"UnionRenderers"},{"attributes":{"axis":{"id":"61691"},"dimension":1,"ticker":null},"id":"61694","type":"Grid"},{"attributes":{},"id":"61753","type":"Selection"},{"attributes":{"children":[{"id":"61678"},{"id":"61709"}]},"id":"61761","type":"Row"},{"attributes":{},"id":"61700","type":"HelpTool"},{"attributes":{},"id":"61698","type":"SaveTool"},{"attributes":{},"id":"61710","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"61779"},"selection_policy":{"id":"61778"}},"id":"61756","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"61742","type":"Quad"},{"attributes":{},"id":"61696","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"61732"}},"id":"61728","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"61718"}],"center":[{"id":"61721"},{"id":"61725"}],"left":[{"id":"61722"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"61759"}],"title":{"id":"61765"},"toolbar":{"id":"61733"},"x_range":{"id":"61710"},"x_scale":{"id":"61714"},"y_range":{"id":"61712"},"y_scale":{"id":"61716"}},"id":"61709","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"61718"},"ticker":null},"id":"61721","type":"Grid"},{"attributes":{},"id":"61719","type":"BasicTicker"},{"attributes":{},"id":"61730","type":"ResetTool"},{"attributes":{},"id":"61685","type":"LinearScale"},{"attributes":{"formatter":{"id":"61770"},"ticker":{"id":"61723"}},"id":"61722","type":"LinearAxis"},{"attributes":{"axis":{"id":"61722"},"dimension":1,"ticker":null},"id":"61725","type":"Grid"},{"attributes":{},"id":"61692","type":"BasicTicker"},{"attributes":{"data_source":{"id":"61740"},"glyph":{"id":"61741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"61742"},"selection_glyph":null,"view":{"id":"61744"}},"id":"61743","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"61743"}]},"id":"61755","type":"LegendItem"},{"attributes":{},"id":"61716","type":"LinearScale"},{"attributes":{},"id":"61712","type":"DataRange1d"},{"attributes":{},"id":"61749","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"61758","type":"Line"},{"attributes":{"formatter":{"id":"61772"},"ticker":{"id":"61719"}},"id":"61718","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"61695"},{"id":"61696"},{"id":"61697"},{"id":"61698"},{"id":"61699"},{"id":"61700"}]},"id":"61702","type":"Toolbar"},{"attributes":{},"id":"61778","type":"UnionRenderers"},{"attributes":{"source":{"id":"61740"}},"id":"61744","type":"CDSView"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"61757","type":"Line"},{"attributes":{},"id":"61695","type":"PanTool"},{"attributes":{"source":{"id":"61756"}},"id":"61760","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"61701","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"61747"},"ticker":{"id":"61692"}},"id":"61691","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"61726"},{"id":"61727"},{"id":"61728"},{"id":"61729"},{"id":"61730"},{"id":"61731"}]},"id":"61733","type":"Toolbar"},{"attributes":{"text":""},"id":"61746","type":"Title"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"61741","type":"Quad"},{"attributes":{},"id":"61772","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"61687"}],"center":[{"id":"61690"},{"id":"61694"},{"id":"61754"}],"left":[{"id":"61691"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"61743"}],"title":{"id":"61746"},"toolbar":{"id":"61702"},"x_range":{"id":"61679"},"x_scale":{"id":"61683"},"y_range":{"id":"61681"},"y_scale":{"id":"61685"}},"id":"61678","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61714","type":"LinearScale"},{"attributes":{},"id":"61731","type":"HelpTool"},{"attributes":{},"id":"61681","type":"DataRange1d"}],"root_ids":["61761"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"1fd25486-8e8f-49bf-b704-0948007eae00","root_ids":["61761"],"roots":{"61761":"e3f64c1f-8af0-441c-b212-5cb19f2df091"}}];
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