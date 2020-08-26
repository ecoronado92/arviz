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
    
      
      
    
      var element = document.getElementById("9c6dd4b6-7977-43df-b06f-2176e249df8b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9c6dd4b6-7977-43df-b06f-2176e249df8b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e8fd3d05-452b-477f-8d37-3f72c8315f7d":{"roots":{"references":[{"attributes":{},"id":"62277","type":"DataRange1d"},{"attributes":{},"id":"62291","type":"ResetTool"},{"attributes":{"axis":{"id":"62283"},"ticker":null},"id":"62286","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"62324"},"ticker":{"id":"62288"}},"id":"62287","type":"LinearAxis"},{"attributes":{},"id":"62288","type":"BasicTicker"},{"attributes":{"below":[{"id":"62283"}],"center":[{"id":"62286"},{"id":"62290"}],"left":[{"id":"62287"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"62313"},{"id":"62317"},{"id":"62319"},{"id":"62320"}],"title":{"id":"62321"},"toolbar":{"id":"62301"},"toolbar_location":null,"x_range":{"id":"62275"},"x_scale":{"id":"62279"},"y_range":{"id":"62277"},"y_scale":{"id":"62281"}},"id":"62274","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"62300","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"62287"},"dimension":1,"ticker":null},"id":"62290","type":"Grid"},{"attributes":{},"id":"62330","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"62299"}},"id":"62293","type":"BoxZoomTool"},{"attributes":{},"id":"62331","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62312","type":"Circle"},{"attributes":{},"id":"62292","type":"PanTool"},{"attributes":{"callback":null},"id":"62298","type":"HoverTool"},{"attributes":{},"id":"62324","type":"BasicTickFormatter"},{"attributes":{},"id":"62297","type":"SaveTool"},{"attributes":{},"id":"62294","type":"WheelZoomTool"},{"attributes":{},"id":"62275","type":"DataRange1d"},{"attributes":{"overlay":{"id":"62300"}},"id":"62295","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"62274"},0,0]]},"id":"62335","type":"GridBox"},{"attributes":{},"id":"62326","type":"BasicTickFormatter"},{"attributes":{},"id":"62296","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"62301"}],"tools":[{"id":"62291"},{"id":"62292"},{"id":"62293"},{"id":"62294"},{"id":"62295"},{"id":"62296"},{"id":"62297"},{"id":"62298"}]},"id":"62336","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62311","type":"Circle"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"62315","type":"Dash"},{"attributes":{},"id":"62332","type":"UnionRenderers"},{"attributes":{},"id":"62333","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"62291"},{"id":"62292"},{"id":"62293"},{"id":"62294"},{"id":"62295"},{"id":"62296"},{"id":"62297"},{"id":"62298"}]},"id":"62301","type":"Toolbar"},{"attributes":{"data_source":{"id":"62310"},"glyph":{"id":"62311"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62312"},"selection_glyph":null,"view":{"id":"62314"}},"id":"62313","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62331"},"selection_policy":{"id":"62330"}},"id":"62310","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62316"}},"id":"62318","type":"CDSView"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"62326"},"ticker":{"id":"62284"}},"id":"62283","type":"LinearAxis"},{"attributes":{"source":{"id":"62310"}},"id":"62314","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"62320","type":"Span"},{"attributes":{"data_source":{"id":"62316"},"glyph":{"id":"62315"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"62318"}},"id":"62317","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"62336"},"toolbar_location":"above"},"id":"62337","type":"ToolbarBox"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"62333"},"selection_policy":{"id":"62332"}},"id":"62316","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"62299","type":"BoxAnnotation"},{"attributes":{"text":"mu"},"id":"62321","type":"Title"},{"attributes":{},"id":"62284","type":"BasicTicker"},{"attributes":{},"id":"62279","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"62319","type":"Span"},{"attributes":{"children":[{"id":"62337"},{"id":"62335"}]},"id":"62338","type":"Column"},{"attributes":{},"id":"62281","type":"LinearScale"}],"root_ids":["62338"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"e8fd3d05-452b-477f-8d37-3f72c8315f7d","root_ids":["62338"],"roots":{"62338":"9c6dd4b6-7977-43df-b06f-2176e249df8b"}}];
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