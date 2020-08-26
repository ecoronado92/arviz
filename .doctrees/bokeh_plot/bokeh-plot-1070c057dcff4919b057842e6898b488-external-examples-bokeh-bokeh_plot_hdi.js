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
    
      
      
    
      var element = document.getElementById("e7c37aba-4045-4447-b92a-a645088e9620");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e7c37aba-4045-4447-b92a-a645088e9620' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9ac2f5f9-7b16-435f-9bb0-59250c16d2f5":{"roots":{"references":[{"attributes":{},"id":"63431","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"63407"}},"id":"63402","type":"LassoSelectTool"},{"attributes":{},"id":"63401","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"63418","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"63419","type":"Patch"},{"attributes":{},"id":"63386","type":"LinearScale"},{"attributes":{},"id":"63429","type":"BasicTickFormatter"},{"attributes":{},"id":"63403","type":"UndoTool"},{"attributes":{},"id":"63388","type":"LinearScale"},{"attributes":{},"id":"63382","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"63436"},"selection_policy":{"id":"63435"}},"id":"63417","type":"ColumnDataSource"},{"attributes":{},"id":"63436","type":"Selection"},{"attributes":{"text":""},"id":"63428","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"TdRROFjtAMCvP63pKYwAwC1VzhZAqf6/7UnH7Kp+/b8c/fvEk9P6v+0QAixtRvq/aBBdsT4m+L/JxxnA07r3vylD8NSyWvW/lmlhSV+w9L8xHeTD94P0v66j+LmIPfS/kXuyhErt8b8cesZTYeLxv2G2bNlBrPC/R//601T57r/bxElVSGHtvyWmlYIhXO2/0zF1nVA/7L8Oiv6Wpjrsv6DzyETTsuu/q4Y9lx8X6r9Qq1QjYzfpv2WijE/kGei/qt5ojF2e57/CenvJR13mv8X4iL9cu+W/eF32G5xA5b9dWC6YX+zkv6lF47TEheS/dKKGvt0f5L+/jfspuYHjv4Vc1Mb35+K/muNBuL6i4r/QDqooUHniv9OeXVTxB+K/y9HVXCgs4b9LnQcuUg3hv1Nke9v1mt2/0JPjdr9u278bZEUrjAjZv7jAxdgaJta/Eie/id9+1L/swLmWKV/UvzlFgsxb/dO/gM5d4IQ3z78I6PCP0tHLv4JD4NeVGMu/qM9rCxr+yb/hPottPr7Gv2r+KRiy3cW/XEmH10tVvL9N3dWyN3e1v3VGcJ5xUbG/BM5BazjGrr/Y6PKg7C+pv0A3arZMd5G/Apj3N4QzjD/QB51GARWVPzu3WmIwh6A/Qivpm/y6tj8Wv4rOfqm5P4kBJkpRzrk/NiQtHqp2xT+gbdWv8prIP44Y+ZUo0Mk/DPK0EtThzT9h3iEl8wvOP/39wjw3pc8/KGPgYkTN0D+WYVTsmh7UP0bgcCMljdU/01Y1b6523T9vL9rAF9TeP4tAe1Qq4eA/oZtxQfg74T/yr0t6h0DhP0f6cHVQReE/vWCG1amz4T8w/zvzk37jPwvZ30a6NOc/zN0LuyPR6T9Fb7BibJbsPxAyyLIQRu0/c9afGxNI7T90edR6aXvuPywrwIIWA/E/yW9Z4RcU8z8tq6TfZBnzPzdHuRVU0PM/knaO83yV+D+vmkTMogT7P4fdVAF8jPw/qXING3K6/D/Wuo0Fk6z+P1KdYPGcDf8/ztHFNHrFAEAsRbTrTjcBQJ7QCFKwrwNAoIiulFJpBEA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"Zldcj08l7j+igKUsrOfuP2rVmPRfq/A/CluciapA8T9yAYIdNpbyP4r3/mnJ3PI/zHdRp+Ds8z8cHPMfliL0P2zeh5WmUvU/NUtPW9Cn9T9o8Q0eBL71PymuA6M74fU/OMKmvVoJ9z/ywhxWzw73P9CkSRPfqfc/LkABy6pB+D/Jjq3qraf4P3eWWp/3qPg/i7Oi2Cvw+D98XUBaVvH4PxjDzS5LE/k/VZ4wGjh6+T8s1So3J7L5P2fXHOyG+fk/VsjlnGgY+j9QIaENrmj6P8/BHdAokfo/omgC+div+j/pafQZ6MT6P5Yux9KO3vo/Y1dekAj4+j+QHIG1kR/7P9/oSg4CRvs/GofvUVBX+z9MfNX1q2H7P0uY6KoDfvs/jYvK6PW0+z+tGH50q7z7P3aTkEShTPw/ho0jESiS/D99U5d67t78P+lH56Q8O/0/HhvIDiRw/T/ixyjNGnT9P1m3b4ZUgP0/GCP6sYcM/j+A8QDX4kL+P8j7gaJ2Tv4/BkNJXx5g/j8STCcZHJT+Pxlgfd4kov4/tcVDoVUd/z8WUWlCRlT/P8x9DHN0df8/yPhSHueE/z9dNHxNQJv/P5Irk2YR3f8/zPsbwhkOAEAInUYBFRUAQG61xGAOIQBAraRv8utaAED8Kjr7pWYAQAaYKEU5ZwBAImnxULWrAEBtq36V18QAQMTIr0SBzgBAkKeVoA7vAEDzDimZX/AAQPAX5rkp/QBAMgYuRtQMAUAZRsWu6UEBQAQON1LSWAFAbVXz5mrXAUD3og18Qe0BQBFoj0olHAJAdDMuCH8nAkD+dUnvECgCQEkfrg6qKAJAGMywOnU2AkDmf2d+0m8CQCH720iX5gJAunthdyQ6A0DpDVaMzZIDQEIGWRbCqANAzvpzYwKpA0Auj1ovbc8DQMsKsKDFQARA8ltW+AXFBEDLKuk3WcYEQM5RbgUV9ARApJ3jPF8lBkCsJhGzKMEGQGI3VQAfIwdAqlzDhpwuB0C2bmPBJKsHQFQnWDxnwwdA5+hiGr1iCECWItp1p5sIQE9oBCnY1wlAUERXSqk0CkA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"63438"},"selection_policy":{"id":"63437"}},"id":"63422","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"63422"},"glyph":{"id":"63423"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"63424"},"selection_glyph":null,"view":{"id":"63426"}},"id":"63425","type":"GlyphRenderer"},{"attributes":{"source":{"id":"63417"}},"id":"63421","type":"CDSView"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"63423","type":"Line"},{"attributes":{"axis":{"id":"63394"},"dimension":1,"ticker":null},"id":"63397","type":"Grid"},{"attributes":{},"id":"63395","type":"BasicTicker"},{"attributes":{},"id":"63404","type":"SaveTool"},{"attributes":{"source":{"id":"63422"}},"id":"63426","type":"CDSView"},{"attributes":{},"id":"63435","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"63429"},"ticker":{"id":"63395"}},"id":"63394","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"63424","type":"Line"},{"attributes":{"formatter":{"id":"63431"},"ticker":{"id":"63391"}},"id":"63390","type":"LinearAxis"},{"attributes":{},"id":"63437","type":"UnionRenderers"},{"attributes":{},"id":"63438","type":"Selection"},{"attributes":{"data_source":{"id":"63417"},"glyph":{"id":"63418"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"63419"},"selection_glyph":null,"view":{"id":"63421"}},"id":"63420","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"63405","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"63406","type":"BoxAnnotation"},{"attributes":{},"id":"63399","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"63407","type":"PolyAnnotation"},{"attributes":{},"id":"63391","type":"BasicTicker"},{"attributes":{"overlay":{"id":"63406"}},"id":"63400","type":"BoxZoomTool"},{"attributes":{},"id":"63384","type":"DataRange1d"},{"attributes":{},"id":"63398","type":"ResetTool"},{"attributes":{"below":[{"id":"63390"}],"center":[{"id":"63393"},{"id":"63397"}],"left":[{"id":"63394"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"63420"},{"id":"63425"}],"title":{"id":"63428"},"toolbar":{"id":"63408"},"toolbar_location":"above","x_range":{"id":"63382"},"x_scale":{"id":"63386"},"y_range":{"id":"63384"},"y_scale":{"id":"63388"}},"id":"63381","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"63398"},{"id":"63399"},{"id":"63400"},{"id":"63401"},{"id":"63402"},{"id":"63403"},{"id":"63404"},{"id":"63405"}]},"id":"63408","type":"Toolbar"},{"attributes":{"axis":{"id":"63390"},"ticker":null},"id":"63393","type":"Grid"}],"root_ids":["63381"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"9ac2f5f9-7b16-435f-9bb0-59250c16d2f5","root_ids":["63381"],"roots":{"63381":"e7c37aba-4045-4447-b92a-a645088e9620"}}];
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