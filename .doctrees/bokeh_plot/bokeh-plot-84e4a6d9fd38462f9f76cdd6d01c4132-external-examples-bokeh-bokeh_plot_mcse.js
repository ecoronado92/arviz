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
    
      
      
    
      var element = document.getElementById("bc3dd66d-4e55-40b5-997d-9dfc5b2197c4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bc3dd66d-4e55-40b5-997d-9dfc5b2197c4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"208da60a-8491-44a9-ae33-a97d78ec4aa5":{"roots":{"references":[{"attributes":{"axis":{"id":"82216"},"ticker":null},"id":"82219","type":"Grid"},{"attributes":{},"id":"82320","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"82231","type":"HoverTool"},{"attributes":{},"id":"82266","type":"SaveTool"},{"attributes":{"overlay":{"id":"82269"}},"id":"82264","type":"LassoSelectTool"},{"attributes":{},"id":"82265","type":"UndoTool"},{"attributes":{},"id":"82322","type":"BasicTickFormatter"},{"attributes":{},"id":"82308","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"82232"}},"id":"82226","type":"BoxZoomTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"82308"},"ticker":{"id":"82221"}},"id":"82220","type":"LinearAxis"},{"attributes":{},"id":"82310","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"82268","type":"BoxAnnotation"},{"attributes":{},"id":"82230","type":"SaveTool"},{"attributes":{},"id":"82227","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"82233"}},"id":"82228","type":"LassoSelectTool"},{"attributes":{},"id":"82229","type":"UndoTool"},{"attributes":{},"id":"82221","type":"BasicTicker"},{"attributes":{},"id":"82244","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"82269","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"82267","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"82260"},{"id":"82261"},{"id":"82262"},{"id":"82263"},{"id":"82264"},{"id":"82265"},{"id":"82266"},{"id":"82267"}]},"id":"82270","type":"Toolbar"},{"attributes":{},"id":"82326","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"82310"},"ticker":{"id":"82217"}},"id":"82216","type":"LinearAxis"},{"attributes":{},"id":"82327","type":"Selection"},{"attributes":{},"id":"82263","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"82232","type":"BoxAnnotation"},{"attributes":{},"id":"82328","type":"UnionRenderers"},{"attributes":{},"id":"82329","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"82317"},"selection_policy":{"id":"82316"}},"id":"82288","type":"ColumnDataSource"},{"attributes":{},"id":"82314","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"82233","type":"PolyAnnotation"},{"attributes":{"source":{"id":"82288"}},"id":"82290","type":"CDSView"},{"attributes":{},"id":"82315","type":"Selection"},{"attributes":{"end":1,"start":-0.05},"id":"82210","type":"DataRange1d"},{"attributes":{"source":{"id":"82279"}},"id":"82283","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"82287","type":"Dash"},{"attributes":{},"id":"82208","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"82284","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"82285","type":"Span"},{"attributes":{},"id":"82214","type":"LinearScale"},{"attributes":{"data_source":{"id":"82288"},"glyph":{"id":"82287"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"82290"}},"id":"82289","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"82291","type":"Title"},{"attributes":{"source":{"id":"82293"}},"id":"82297","type":"CDSView"},{"attributes":{},"id":"82316","type":"UnionRenderers"},{"attributes":{},"id":"82261","type":"PanTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"82286","type":"Span"},{"attributes":{"axis":{"id":"82220"},"dimension":1,"ticker":null},"id":"82223","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"82329"},"selection_policy":{"id":"82328"}},"id":"82302","type":"ColumnDataSource"},{"attributes":{},"id":"82317","type":"Selection"},{"attributes":{"children":[{"id":"82333"},{"id":"82331"}]},"id":"82334","type":"Column"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"82300","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82295","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82294","type":"Circle"},{"attributes":{},"id":"82224","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"82327"},"selection_policy":{"id":"82326"}},"id":"82293","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"82315"},"selection_policy":{"id":"82314"}},"id":"82279","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"82224"},{"id":"82225"},{"id":"82226"},{"id":"82227"},{"id":"82228"},{"id":"82229"},{"id":"82230"},{"id":"82231"}]},"id":"82234","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"82234"},{"id":"82270"}],"tools":[{"id":"82224"},{"id":"82225"},{"id":"82226"},{"id":"82227"},{"id":"82228"},{"id":"82229"},{"id":"82230"},{"id":"82231"},{"id":"82260"},{"id":"82261"},{"id":"82262"},{"id":"82263"},{"id":"82264"},{"id":"82265"},{"id":"82266"},{"id":"82267"}]},"id":"82332","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"82293"},"glyph":{"id":"82294"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82295"},"selection_glyph":null,"view":{"id":"82297"}},"id":"82296","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"82252"}],"center":[{"id":"82255"},{"id":"82259"}],"left":[{"id":"82256"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"82296"},{"id":"82298"},{"id":"82299"},{"id":"82300"},{"id":"82303"}],"title":{"id":"82305"},"toolbar":{"id":"82270"},"toolbar_location":null,"x_range":{"id":"82244"},"x_scale":{"id":"82248"},"y_range":{"id":"82246"},"y_scale":{"id":"82250"}},"id":"82243","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"82279"},"glyph":{"id":"82280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"82281"},"selection_glyph":null,"view":{"id":"82283"}},"id":"82282","type":"GlyphRenderer"},{"attributes":{"source":{"id":"82302"}},"id":"82304","type":"CDSView"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"82322"},"ticker":{"id":"82253"}},"id":"82252","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"82301","type":"Dash"},{"attributes":{"children":[[{"id":"82207"},0,0],[{"id":"82243"},0,1]]},"id":"82331","type":"GridBox"},{"attributes":{"end":1,"start":-0.05},"id":"82246","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"82298","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"82299","type":"Span"},{"attributes":{},"id":"82248","type":"LinearScale"},{"attributes":{"data_source":{"id":"82302"},"glyph":{"id":"82301"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"82304"}},"id":"82303","type":"GlyphRenderer"},{"attributes":{},"id":"82225","type":"PanTool"},{"attributes":{},"id":"82250","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"82305","type":"Title"},{"attributes":{},"id":"82260","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82280","type":"Circle"},{"attributes":{},"id":"82253","type":"BasicTicker"},{"attributes":{"axis":{"id":"82252"},"ticker":null},"id":"82255","type":"Grid"},{"attributes":{},"id":"82212","type":"LinearScale"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"82320"},"ticker":{"id":"82257"}},"id":"82256","type":"LinearAxis"},{"attributes":{},"id":"82257","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"82332"},"toolbar_location":"above"},"id":"82333","type":"ToolbarBox"},{"attributes":{"axis":{"id":"82256"},"dimension":1,"ticker":null},"id":"82259","type":"Grid"},{"attributes":{"overlay":{"id":"82268"}},"id":"82262","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"82216"}],"center":[{"id":"82219"},{"id":"82223"}],"left":[{"id":"82220"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"82282"},{"id":"82284"},{"id":"82285"},{"id":"82286"},{"id":"82289"}],"title":{"id":"82291"},"toolbar":{"id":"82234"},"toolbar_location":null,"x_range":{"id":"82208"},"x_scale":{"id":"82212"},"y_range":{"id":"82210"},"y_scale":{"id":"82214"}},"id":"82207","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"82217","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"82281","type":"Circle"}],"root_ids":["82334"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"208da60a-8491-44a9-ae33-a97d78ec4aa5","root_ids":["82334"],"roots":{"82334":"bc3dd66d-4e55-40b5-997d-9dfc5b2197c4"}}];
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