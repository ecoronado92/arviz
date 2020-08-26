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
    
      
      
    
      var element = document.getElementById("c47aa975-c853-4510-aa5b-03d147a47590");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c47aa975-c853-4510-aa5b-03d147a47590' but no matching script tag was found.")
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
                    
                  var docs_json = '{"77f49e6d-5a3c-4976-8123-393896072060":{"roots":{"references":[{"attributes":{"overlay":{"id":"61877"}},"id":"61871","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"61861"}],"center":[{"id":"61864"},{"id":"61868"}],"left":[{"id":"61865"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"61890"}],"title":{"id":"61892"},"toolbar":{"id":"61879"},"toolbar_location":null,"x_range":{"id":"61853"},"x_scale":{"id":"61857"},"y_range":{"id":"61855"},"y_scale":{"id":"61859"}},"id":"61852","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61874","type":"UndoTool"},{"attributes":{"formatter":{"id":"61897"},"ticker":{"id":"61862"}},"id":"61861","type":"LinearAxis"},{"attributes":{},"id":"61853","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"61902"},"selection_policy":{"id":"61901"}},"id":"61889","type":"ColumnDataSource"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"61892","type":"Title"},{"attributes":{},"id":"61857","type":"LinearScale"},{"attributes":{},"id":"61901","type":"UnionRenderers"},{"attributes":{},"id":"61902","type":"Selection"},{"attributes":{"data_source":{"id":"61889"},"glyph":{"id":"61888"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"61891"}},"id":"61890","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"61861"},"ticker":null},"id":"61864","type":"Grid"},{"attributes":{},"id":"61862","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"61869"},{"id":"61870"},{"id":"61871"},{"id":"61872"},{"id":"61873"},{"id":"61874"},{"id":"61875"},{"id":"61876"}]},"id":"61879","type":"Toolbar"},{"attributes":{"overlay":{"id":"61878"}},"id":"61873","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"61905"},"toolbar_location":"above"},"id":"61906","type":"ToolbarBox"},{"attributes":{},"id":"61859","type":"LinearScale"},{"attributes":{"children":[[{"id":"61852"},0,0]]},"id":"61904","type":"GridBox"},{"attributes":{},"id":"61875","type":"SaveTool"},{"attributes":{},"id":"61872","type":"WheelZoomTool"},{"attributes":{},"id":"61855","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"61879"}],"tools":[{"id":"61869"},{"id":"61870"},{"id":"61871"},{"id":"61872"},{"id":"61873"},{"id":"61874"},{"id":"61875"},{"id":"61876"}]},"id":"61905","type":"ProxyToolbar"},{"attributes":{},"id":"61870","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"61877","type":"BoxAnnotation"},{"attributes":{"source":{"id":"61889"}},"id":"61891","type":"CDSView"},{"attributes":{"children":[{"id":"61906"},{"id":"61904"}]},"id":"61907","type":"Column"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"61888","type":"Cross"},{"attributes":{},"id":"61869","type":"ResetTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"61895"},"ticker":{"id":"61866"}},"id":"61865","type":"LinearAxis"},{"attributes":{},"id":"61866","type":"BasicTicker"},{"attributes":{},"id":"61895","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"61876","type":"HoverTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"61878","type":"PolyAnnotation"},{"attributes":{},"id":"61897","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"61865"},"dimension":1,"ticker":null},"id":"61868","type":"Grid"}],"root_ids":["61907"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"77f49e6d-5a3c-4976-8123-393896072060","root_ids":["61907"],"roots":{"61907":"c47aa975-c853-4510-aa5b-03d147a47590"}}];
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