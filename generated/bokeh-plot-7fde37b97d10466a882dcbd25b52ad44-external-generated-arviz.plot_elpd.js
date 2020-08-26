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
    
      
      
    
      var element = document.getElementById("a8bee1cb-efa6-462f-815c-8f29735533f7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8bee1cb-efa6-462f-815c-8f29735533f7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"45db5da4-7623-4df2-ac10-d6e91ae8b2c3":{"roots":{"references":[{"attributes":{},"id":"90138","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90119","type":"PolyAnnotation"},{"attributes":{},"id":"90111","type":"PanTool"},{"attributes":{},"id":"90113","type":"WheelZoomTool"},{"attributes":{},"id":"90100","type":"LinearScale"},{"attributes":{"source":{"id":"90130"}},"id":"90132","type":"CDSView"},{"attributes":{"children":[{"id":"90147"},{"id":"90145"}]},"id":"90148","type":"Column"},{"attributes":{},"id":"90110","type":"ResetTool"},{"attributes":{},"id":"90143","type":"Selection"},{"attributes":{},"id":"90096","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90110"},{"id":"90111"},{"id":"90112"},{"id":"90113"},{"id":"90114"},{"id":"90115"},{"id":"90116"},{"id":"90117"}]},"id":"90120","type":"Toolbar"},{"attributes":{},"id":"90116","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"90120"}],"tools":[{"id":"90110"},{"id":"90111"},{"id":"90112"},{"id":"90113"},{"id":"90114"},{"id":"90115"},{"id":"90116"},{"id":"90117"}]},"id":"90146","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"90130"},"glyph":{"id":"90129"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"90132"}},"id":"90131","type":"GlyphRenderer"},{"attributes":{"text":"centered model - non centered model"},"id":"90133","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90118","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"90119"}},"id":"90114","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"90106"},"dimension":1,"ticker":null},"id":"90109","type":"Grid"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"90143"},"selection_policy":{"id":"90142"}},"id":"90130","type":"ColumnDataSource"},{"attributes":{},"id":"90107","type":"BasicTicker"},{"attributes":{"formatter":{"id":"90138"},"ticker":{"id":"90103"}},"id":"90102","type":"LinearAxis"},{"attributes":{"axis":{"id":"90102"},"ticker":null},"id":"90105","type":"Grid"},{"attributes":{"below":[{"id":"90102"}],"center":[{"id":"90105"},{"id":"90109"}],"left":[{"id":"90106"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"90131"}],"title":{"id":"90133"},"toolbar":{"id":"90120"},"toolbar_location":null,"x_range":{"id":"90094"},"x_scale":{"id":"90098"},"y_range":{"id":"90096"},"y_scale":{"id":"90100"}},"id":"90093","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"90129","type":"Cross"},{"attributes":{"overlay":{"id":"90118"}},"id":"90112","type":"BoxZoomTool"},{"attributes":{},"id":"90098","type":"LinearScale"},{"attributes":{},"id":"90094","type":"DataRange1d"},{"attributes":{},"id":"90103","type":"BasicTicker"},{"attributes":{"children":[[{"id":"90093"},0,0]]},"id":"90145","type":"GridBox"},{"attributes":{},"id":"90136","type":"BasicTickFormatter"},{"attributes":{},"id":"90142","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"90117","type":"HoverTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"90136"},"ticker":{"id":"90107"}},"id":"90106","type":"LinearAxis"},{"attributes":{},"id":"90115","type":"UndoTool"},{"attributes":{"toolbar":{"id":"90146"},"toolbar_location":"above"},"id":"90147","type":"ToolbarBox"}],"root_ids":["90148"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"45db5da4-7623-4df2-ac10-d6e91ae8b2c3","root_ids":["90148"],"roots":{"90148":"a8bee1cb-efa6-462f-815c-8f29735533f7"}}];
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