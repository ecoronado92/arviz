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
    
      
      
    
      var element = document.getElementById("6d899b6f-3e35-4884-8036-a16aa7191e80");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6d899b6f-3e35-4884-8036-a16aa7191e80' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c3c3a4f3-d3e4-4710-b7dd-5081531e2c0e":{"roots":{"references":[{"attributes":{},"id":"62411","type":"ResetTool"},{"attributes":{},"id":"62401","type":"LinearScale"},{"attributes":{"axis":{"id":"62403"},"ticker":null},"id":"62406","type":"Grid"},{"attributes":{},"id":"62397","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"62439"},"ticker":{"id":"62408"}},"id":"62407","type":"LinearAxis"},{"attributes":{"below":[{"id":"62403"}],"center":[{"id":"62406"},{"id":"62410"}],"left":[{"id":"62407"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"62433"},{"id":"62435"}],"title":{"id":"62436"},"toolbar":{"id":"62421"},"toolbar_location":null,"x_range":{"id":"62395"},"x_scale":{"id":"62399"},"y_range":{"id":"62397"},"y_scale":{"id":"62401"}},"id":"62394","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"62439","type":"BasicTickFormatter"},{"attributes":{},"id":"62408","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"62420","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"62407"},"dimension":1,"ticker":null},"id":"62410","type":"Grid"},{"attributes":{"overlay":{"id":"62419"}},"id":"62413","type":"BoxZoomTool"},{"attributes":{},"id":"62441","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62432","type":"Circle"},{"attributes":{},"id":"62412","type":"PanTool"},{"attributes":{"callback":null},"id":"62418","type":"HoverTool"},{"attributes":{},"id":"62417","type":"SaveTool"},{"attributes":{},"id":"62414","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"62420"}},"id":"62415","type":"LassoSelectTool"},{"attributes":{},"id":"62395","type":"DataRange1d"},{"attributes":{},"id":"62416","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"62411"},{"id":"62412"},{"id":"62413"},{"id":"62414"},{"id":"62415"},{"id":"62416"},{"id":"62417"},{"id":"62418"}]},"id":"62421","type":"Toolbar"},{"attributes":{"children":[[{"id":"62394"},0,0]]},"id":"62448","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62431","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"62435","type":"Span"},{"attributes":{"children":[{"id":"62450"},{"id":"62448"}]},"id":"62451","type":"Column"},{"attributes":{"data_source":{"id":"62430"},"glyph":{"id":"62431"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62432"},"selection_glyph":null,"view":{"id":"62434"}},"id":"62433","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQDIUfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1AQsbCePPwnkB7Du/cq5qgQH8ihBoHoKBAh58qLZB5oECYlOwhLnyfQFgCvMP22p1AysGm42rqnEA6InuU09KdQLKWYY7d25xA+A/0ZSlsnEBpLBEly1mdQPcF40OedZlAEC7heDC7m0AxB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62446"},"selection_policy":{"id":"62445"}},"id":"62430","type":"ColumnDataSource"},{"attributes":{"source":{"id":"62430"}},"id":"62434","type":"CDSView"},{"attributes":{"text":"sigma"},"id":"62436","type":"Title"},{"attributes":{"toolbars":[{"id":"62421"}],"tools":[{"id":"62411"},{"id":"62412"},{"id":"62413"},{"id":"62414"},{"id":"62415"},{"id":"62416"},{"id":"62417"},{"id":"62418"}]},"id":"62449","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"62419","type":"BoxAnnotation"},{"attributes":{},"id":"62399","type":"LinearScale"},{"attributes":{},"id":"62445","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"62449"},"toolbar_location":"above"},"id":"62450","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"62441"},"ticker":{"id":"62404"}},"id":"62403","type":"LinearAxis"},{"attributes":{},"id":"62446","type":"Selection"},{"attributes":{},"id":"62404","type":"BasicTicker"}],"root_ids":["62451"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"c3c3a4f3-d3e4-4710-b7dd-5081531e2c0e","root_ids":["62451"],"roots":{"62451":"6d899b6f-3e35-4884-8036-a16aa7191e80"}}];
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