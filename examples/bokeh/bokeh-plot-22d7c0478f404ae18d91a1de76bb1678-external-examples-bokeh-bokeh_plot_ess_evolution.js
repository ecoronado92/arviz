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
    
      
      
    
      var element = document.getElementById("1df004f2-2716-42f5-8e8f-ec4d528ad0f4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1df004f2-2716-42f5-8e8f-ec4d528ad0f4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"fbb5085b-6e2c-4fe5-a422-e1beab3c5d06":{"roots":{"references":[{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"62156"},{"id":"62161"}]},"id":"62175","type":"LegendItem"},{"attributes":{},"id":"62120","type":"DataRange1d"},{"attributes":{"data_source":{"id":"62168"},"glyph":{"id":"62169"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62170"},"selection_glyph":null,"view":{"id":"62172"}},"id":"62171","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62154","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62155","type":"Circle"},{"attributes":{},"id":"62135","type":"PanTool"},{"attributes":{"source":{"id":"62168"}},"id":"62172","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"62159","type":"Line"},{"attributes":{"callback":null},"id":"62141","type":"HoverTool"},{"attributes":{},"id":"62192","type":"UnionRenderers"},{"attributes":{},"id":"62140","type":"SaveTool"},{"attributes":{"click_policy":"hide","items":[{"id":"62175"},{"id":"62176"}],"location":"center_right","orientation":"horizontal"},"id":"62174","type":"Legend"},{"attributes":{"above":[{"id":"62174"}],"below":[{"id":"62126"}],"center":[{"id":"62129"},{"id":"62133"}],"left":[{"id":"62130"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"62156"},{"id":"62161"},{"id":"62166"},{"id":"62171"},{"id":"62173"}],"title":{"id":"62177"},"toolbar":{"id":"62144"},"toolbar_location":null,"x_range":{"id":"62118"},"x_scale":{"id":"62122"},"y_range":{"id":"62120"},"y_scale":{"id":"62124"}},"id":"62117","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"62137","type":"WheelZoomTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"62171"},{"id":"62166"}]},"id":"62176","type":"LegendItem"},{"attributes":{},"id":"62118","type":"DataRange1d"},{"attributes":{"overlay":{"id":"62143"}},"id":"62138","type":"LassoSelectTool"},{"attributes":{},"id":"62193","type":"Selection"},{"attributes":{},"id":"62139","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"62134"},{"id":"62135"},{"id":"62136"},{"id":"62137"},{"id":"62138"},{"id":"62139"},{"id":"62140"},{"id":"62141"}]},"id":"62144","type":"Toolbar"},{"attributes":{},"id":"62188","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"62158"},"glyph":{"id":"62159"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62160"},"selection_glyph":null,"view":{"id":"62162"}},"id":"62161","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"62144"}],"tools":[{"id":"62134"},{"id":"62135"},{"id":"62136"},{"id":"62137"},{"id":"62138"},{"id":"62139"},{"id":"62140"},{"id":"62141"}]},"id":"62196","type":"ProxyToolbar"},{"attributes":{"text":"b"},"id":"62177","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"HIzNVbLFYUBgp0Q0eoxpQLkTfhv0tHVASkXv2Y9se0Dp232dC/CAQPk2UCKmJoRAh2/6lLvYikAM96jDrgaOQBPA7A80m5BALgAl3ga0kkC7JpWUaP+TQMn7+Cp2cJVAJTl3/zpWlkB8CCW6zVKYQH7sMXK5gplAVv3VSBOzm0ButHj4/62fQJnVefRus6BAmrdQWHedoUCgof7eHNqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62187"},"selection_policy":{"id":"62186"}},"id":"62153","type":"ColumnDataSource"},{"attributes":{},"id":"62189","type":"Selection"},{"attributes":{"data_source":{"id":"62153"},"glyph":{"id":"62154"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62155"},"selection_glyph":null,"view":{"id":"62157"}},"id":"62156","type":"GlyphRenderer"},{"attributes":{},"id":"62180","type":"BasicTickFormatter"},{"attributes":{},"id":"62187","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"HIzNVbLFYUBgp0Q0eoxpQLkTfhv0tHVASkXv2Y9se0Dp232dC/CAQPk2UCKmJoRAh2/6lLvYikAM96jDrgaOQBPA7A80m5BALgAl3ga0kkC7JpWUaP+TQMn7+Cp2cJVAJTl3/zpWlkB8CCW6zVKYQH7sMXK5gplAVv3VSBOzm0ButHj4/62fQJnVefRus6BAmrdQWHedoUCgof7eHNqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62189"},"selection_policy":{"id":"62188"}},"id":"62158","type":"ColumnDataSource"},{"attributes":{},"id":"62182","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"62153"}},"id":"62157","type":"CDSView"},{"attributes":{},"id":"62186","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62169","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"62170","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"62173","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"62142","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62191"},"selection_policy":{"id":"62190"}},"id":"62163","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"62160","type":"Line"},{"attributes":{},"id":"62122","type":"LinearScale"},{"attributes":{"source":{"id":"62158"}},"id":"62162","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"62164","type":"Line"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"62182"},"ticker":{"id":"62127"}},"id":"62126","type":"LinearAxis"},{"attributes":{"children":[{"id":"62197"},{"id":"62195"}]},"id":"62198","type":"Column"},{"attributes":{"data_source":{"id":"62163"},"glyph":{"id":"62164"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"62165"},"selection_glyph":null,"view":{"id":"62167"}},"id":"62166","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"62196"},"toolbar_location":"above"},"id":"62197","type":"ToolbarBox"},{"attributes":{},"id":"62127","type":"BasicTicker"},{"attributes":{},"id":"62190","type":"UnionRenderers"},{"attributes":{},"id":"62134","type":"ResetTool"},{"attributes":{},"id":"62124","type":"LinearScale"},{"attributes":{},"id":"62191","type":"Selection"},{"attributes":{"axis":{"id":"62126"},"ticker":null},"id":"62129","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"62193"},"selection_policy":{"id":"62192"}},"id":"62168","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"62165","type":"Line"},{"attributes":{"children":[[{"id":"62117"},0,0]]},"id":"62195","type":"GridBox"},{"attributes":{"axis_label":"ESS","formatter":{"id":"62180"},"ticker":{"id":"62131"}},"id":"62130","type":"LinearAxis"},{"attributes":{"source":{"id":"62163"}},"id":"62167","type":"CDSView"},{"attributes":{},"id":"62131","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"62143","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"62130"},"dimension":1,"ticker":null},"id":"62133","type":"Grid"},{"attributes":{"overlay":{"id":"62142"}},"id":"62136","type":"BoxZoomTool"}],"root_ids":["62198"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"fbb5085b-6e2c-4fe5-a422-e1beab3c5d06","root_ids":["62198"],"roots":{"62198":"1df004f2-2716-42f5-8e8f-ec4d528ad0f4"}}];
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