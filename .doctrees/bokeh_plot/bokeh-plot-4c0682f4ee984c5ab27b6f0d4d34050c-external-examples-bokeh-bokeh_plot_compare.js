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
    
      
      
    
      var element = document.getElementById("94c79eaf-a6b3-4173-9b6c-310b85db477c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '94c79eaf-a6b3-4173-9b6c-310b85db477c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"00b0d5d6-d954-4100-8b29-a171a50de394":{"roots":{"references":[{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"59459","type":"MultiLine"},{"attributes":{"overlay":{"id":"59440"}},"id":"59434","type":"BoxZoomTool"},{"attributes":{},"id":"59437","type":"UndoTool"},{"attributes":{},"id":"59494","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"59458"},"glyph":{"id":"59459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59460"},"selection_glyph":null,"view":{"id":"59462"}},"id":"59461","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"59418","type":"DataRange1d"},{"attributes":{"data_source":{"id":"59453"},"glyph":{"id":"59454"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59455"},"selection_glyph":null,"view":{"id":"59457"}},"id":"59456","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-31.98004208013072,-29.394538556648907],[-32.04747896569921,-29.57326938750089]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"59493"},"selection_policy":{"id":"59492"}},"id":"59468","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"59441","type":"PolyAnnotation"},{"attributes":{},"id":"59425","type":"BasicTicker"},{"attributes":{"data_source":{"id":"59473"},"glyph":{"id":"59474"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59475"},"selection_glyph":null,"view":{"id":"59477"}},"id":"59476","type":"GlyphRenderer"},{"attributes":{},"id":"59486","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"59432"},{"id":"59433"},{"id":"59434"},{"id":"59435"},{"id":"59436"},{"id":"59437"},{"id":"59438"},{"id":"59439"}]},"id":"59442","type":"Toolbar"},{"attributes":{},"id":"59489","type":"Selection"},{"attributes":{},"id":"59482","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"59495"},"selection_policy":{"id":"59494"}},"id":"59473","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59475","type":"Circle"},{"attributes":{},"id":"59416","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"59470","type":"MultiLine"},{"attributes":{},"id":"59433","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59455","type":"Triangle"},{"attributes":{},"id":"59493","type":"Selection"},{"attributes":{"children":[{"id":"59499"},{"id":"59497"}]},"id":"59500","type":"Column"},{"attributes":{},"id":"59432","type":"ResetTool"},{"attributes":{"source":{"id":"59463"}},"id":"59467","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59465","type":"Circle"},{"attributes":{},"id":"59492","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"59460","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"59442"}],"tools":[{"id":"59432"},{"id":"59433"},{"id":"59434"},{"id":"59435"},{"id":"59436"},{"id":"59437"},{"id":"59438"},{"id":"59439"}]},"id":"59498","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"59439","type":"HoverTool"},{"attributes":{},"id":"59490","type":"UnionRenderers"},{"attributes":{},"id":"59422","type":"LinearScale"},{"attributes":{},"id":"59491","type":"Selection"},{"attributes":{},"id":"59495","type":"Selection"},{"attributes":{"source":{"id":"59458"}},"id":"59462","type":"CDSView"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"59491"},"selection_policy":{"id":"59490"}},"id":"59463","type":"ColumnDataSource"},{"attributes":{},"id":"59487","type":"Selection"},{"attributes":{},"id":"59438","type":"SaveTool"},{"attributes":{"below":[{"id":"59424"}],"center":[{"id":"59427"},{"id":"59431"}],"left":[{"id":"59428"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"59456"},{"id":"59461"},{"id":"59466"},{"id":"59471"},{"id":"59476"},{"id":"59478"}],"title":{"id":"59480"},"toolbar":{"id":"59442"},"toolbar_location":null,"x_range":{"id":"59416"},"x_scale":{"id":"59420"},"y_range":{"id":"59418"},"y_scale":{"id":"59422"}},"id":"59415","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Log","formatter":{"id":"59482"},"ticker":{"id":"59425"}},"id":"59424","type":"LinearAxis"},{"attributes":{"axis":{"id":"59424"},"ticker":null},"id":"59427","type":"Grid"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59454","type":"Triangle"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"59478","type":"Span"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59474","type":"Circle"},{"attributes":{"source":{"id":"59468"}},"id":"59472","type":"CDSView"},{"attributes":{"children":[[{"id":"59415"},0,0]]},"id":"59497","type":"GridBox"},{"attributes":{},"id":"59488","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"59468"},"glyph":{"id":"59469"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59470"},"selection_glyph":null,"view":{"id":"59472"}},"id":"59471","type":"GlyphRenderer"},{"attributes":{},"id":"59435","type":"WheelZoomTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"59489"},"selection_policy":{"id":"59488"}},"id":"59458","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"59464","type":"Circle"},{"attributes":{"text":""},"id":"59480","type":"Title"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"59469","type":"MultiLine"},{"attributes":{"source":{"id":"59473"}},"id":"59477","type":"CDSView"},{"attributes":{"formatter":{"id":"59481"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"59451"}},"id":"59428","type":"LinearAxis"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"59487"},"selection_policy":{"id":"59486"}},"id":"59453","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"59451","type":"FixedTicker"},{"attributes":{"axis":{"id":"59428"},"dimension":1,"ticker":null},"id":"59431","type":"Grid"},{"attributes":{"source":{"id":"59453"}},"id":"59457","type":"CDSView"},{"attributes":{},"id":"59420","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"59440","type":"BoxAnnotation"},{"attributes":{},"id":"59481","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"59441"}},"id":"59436","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"59463"},"glyph":{"id":"59464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59465"},"selection_glyph":null,"view":{"id":"59467"}},"id":"59466","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"59498"},"toolbar_location":"above"},"id":"59499","type":"ToolbarBox"}],"root_ids":["59500"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"00b0d5d6-d954-4100-8b29-a171a50de394","root_ids":["59500"],"roots":{"59500":"94c79eaf-a6b3-4173-9b6c-310b85db477c"}}];
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