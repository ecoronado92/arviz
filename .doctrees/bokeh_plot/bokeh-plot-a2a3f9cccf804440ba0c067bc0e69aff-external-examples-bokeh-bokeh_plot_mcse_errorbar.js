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
    
      
      
    
      var element = document.getElementById("69741153-18ab-40a5-9a68-77b7b18d4f40");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '69741153-18ab-40a5-9a68-77b7b18d4f40' but no matching script tag was found.")
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
                    
                  var docs_json = '{"438f469e-fe16-4caa-82d6-fcce204a8064":{"roots":{"references":[{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"82501"},"selection_policy":{"id":"82500"}},"id":"82481","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"82488","type":"MultiLine"},{"attributes":{"axis":{"id":"82454"},"ticker":null},"id":"82457","type":"Grid"},{"attributes":{"source":{"id":"82486"}},"id":"82490","type":"CDSView"},{"attributes":{"text":"sigma_a"},"id":"82491","type":"Title"},{"attributes":{"children":[[{"id":"82445"},0,0]]},"id":"82505","type":"GridBox"},{"attributes":{},"id":"82448","type":"DataRange1d"},{"attributes":{"overlay":{"id":"82471"}},"id":"82466","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"82506"},"toolbar_location":"above"},"id":"82507","type":"ToolbarBox"},{"attributes":{},"id":"82500","type":"UnionRenderers"},{"attributes":{},"id":"82501","type":"Selection"},{"attributes":{},"id":"82468","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"82471","type":"PolyAnnotation"},{"attributes":{},"id":"82452","type":"LinearScale"},{"attributes":{},"id":"82459","type":"BasicTicker"},{"attributes":{},"id":"82462","type":"ResetTool"},{"attributes":{"data_source":{"id":"82481"},"glyph":{"id":"82482"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82483"},"selection_glyph":null,"view":{"id":"82485"}},"id":"82484","type":"GlyphRenderer"},{"attributes":{},"id":"82455","type":"BasicTicker"},{"attributes":{},"id":"82494","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"82496"},"ticker":{"id":"82455"}},"id":"82454","type":"LinearAxis"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"82494"},"ticker":{"id":"82459"}},"id":"82458","type":"LinearAxis"},{"attributes":{},"id":"82450","type":"LinearScale"},{"attributes":{},"id":"82496","type":"BasicTickFormatter"},{"attributes":{},"id":"82502","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82483","type":"Dash"},{"attributes":{"axis":{"id":"82458"},"dimension":1,"ticker":null},"id":"82461","type":"Grid"},{"attributes":{},"id":"82465","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82482","type":"Dash"},{"attributes":{},"id":"82503","type":"Selection"},{"attributes":{"overlay":{"id":"82470"}},"id":"82464","type":"BoxZoomTool"},{"attributes":{},"id":"82463","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"82462"},{"id":"82463"},{"id":"82464"},{"id":"82465"},{"id":"82466"},{"id":"82467"},{"id":"82468"},{"id":"82469"}]},"id":"82472","type":"Toolbar"},{"attributes":{"callback":null},"id":"82469","type":"HoverTool"},{"attributes":{"below":[{"id":"82454"}],"center":[{"id":"82457"},{"id":"82461"}],"left":[{"id":"82458"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"82484"},{"id":"82489"}],"title":{"id":"82491"},"toolbar":{"id":"82472"},"toolbar_location":null,"x_range":{"id":"82446"},"x_scale":{"id":"82450"},"y_range":{"id":"82448"},"y_scale":{"id":"82452"}},"id":"82445","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"82470","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"82486"},"glyph":{"id":"82487"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82488"},"selection_glyph":null,"view":{"id":"82490"}},"id":"82489","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"82507"},{"id":"82505"}]},"id":"82508","type":"Column"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06549339056246722,0.07772909137567857],[0.08787280800219426,0.096026828985826],[0.09938050528645676,0.10552315572600299],[0.10802374276672227,0.1134075808106996],[0.1162302004275029,0.12182747609190822],[0.12360542768894803,0.12776837079949457],[0.12894380817324716,0.13320612209388974],[0.13473004088066556,0.13958486303584752],[0.1410243987910333,0.14599357443602928],[0.14727438655209127,0.1512914562771663],[0.15253394255958194,0.1571280520028789],[0.15763981301473762,0.16320348157033204],[0.16412813958579378,0.16864953148930892],[0.17027731176065922,0.17487111388798746],[0.17657291606434122,0.1821662648912062],[0.18542143633837743,0.1894366362996745],[0.19264880841245133,0.19711830100588604],[0.20028066832617925,0.2044348410369909],[0.21254542849378688,0.21837720209111522],[0.23127437507632875,0.2367379732511462]]},"selected":{"id":"82503"},"selection_policy":{"id":"82502"}},"id":"82486","type":"ColumnDataSource"},{"attributes":{"source":{"id":"82481"}},"id":"82485","type":"CDSView"},{"attributes":{},"id":"82446","type":"DataRange1d"},{"attributes":{},"id":"82467","type":"UndoTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"82487","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"82472"}],"tools":[{"id":"82462"},{"id":"82463"},{"id":"82464"},{"id":"82465"},{"id":"82466"},{"id":"82467"},{"id":"82468"},{"id":"82469"}]},"id":"82506","type":"ProxyToolbar"}],"root_ids":["82508"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"438f469e-fe16-4caa-82d6-fcce204a8064","root_ids":["82508"],"roots":{"82508":"69741153-18ab-40a5-9a68-77b7b18d4f40"}}];
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