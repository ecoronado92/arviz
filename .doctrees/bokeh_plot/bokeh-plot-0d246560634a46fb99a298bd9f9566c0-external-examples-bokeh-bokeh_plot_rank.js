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
    
      
      
    
      var element = document.getElementById("d6f8684c-1eb1-4947-b04f-9a53a0a7bdf7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd6f8684c-1eb1-4947-b04f-9a53a0a7bdf7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"17c72a0a-84c3-4c9a-95b1-13fb8469afc9":{"roots":{"references":[{"attributes":{},"id":"87261","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87354","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87353","type":"VBar"},{"attributes":{},"id":"87295","type":"LinearScale"},{"attributes":{"source":{"id":"87352"}},"id":"87356","type":"CDSView"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"87357","type":"Span"},{"attributes":{},"id":"87276","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87359","type":"VBar"},{"attributes":{"overlay":{"id":"87280"}},"id":"87275","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"87352"},"glyph":{"id":"87353"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87354"},"selection_glyph":null,"view":{"id":"87356"}},"id":"87355","type":"GlyphRenderer"},{"attributes":{},"id":"87388","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"87411"},"toolbar_location":"above"},"id":"87412","type":"ToolbarBox"},{"attributes":{"source":{"id":"87364"}},"id":"87368","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87360","type":"VBar"},{"attributes":{},"id":"87389","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"87279","type":"BoxAnnotation"},{"attributes":{"source":{"id":"87358"}},"id":"87362","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87404"},"selection_policy":{"id":"87403"}},"id":"87358","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"87281"},{"id":"87315"}],"tools":[{"id":"87271"},{"id":"87272"},{"id":"87273"},{"id":"87274"},{"id":"87275"},{"id":"87276"},{"id":"87277"},{"id":"87278"},{"id":"87305"},{"id":"87306"},{"id":"87307"},{"id":"87308"},{"id":"87309"},{"id":"87310"},{"id":"87311"},{"id":"87312"}]},"id":"87411","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87365","type":"VBar"},{"attributes":{},"id":"87311","type":"SaveTool"},{"attributes":{"source":{"id":"87370"}},"id":"87374","type":"CDSView"},{"attributes":{"data_source":{"id":"87358"},"glyph":{"id":"87359"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87360"},"selection_glyph":null,"view":{"id":"87362"}},"id":"87361","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87406"},"selection_policy":{"id":"87405"}},"id":"87364","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"87412"},{"id":"87410"}]},"id":"87413","type":"Column"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"87363","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87366","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"87313","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87402"},"selection_policy":{"id":"87401"}},"id":"87352","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"87297"}],"center":[{"id":"87300"},{"id":"87304"},{"id":"87357"},{"id":"87363"},{"id":"87369"},{"id":"87375"}],"left":[{"id":"87301"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"87355"},{"id":"87361"},{"id":"87367"},{"id":"87373"}],"title":{"id":"87378"},"toolbar":{"id":"87315"},"toolbar_location":null,"x_range":{"id":"87255"},"x_scale":{"id":"87293"},"y_range":{"id":"87257"},"y_scale":{"id":"87295"}},"id":"87290","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"87293","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87371","type":"VBar"},{"attributes":{},"id":"87390","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"87364"},"glyph":{"id":"87365"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87366"},"selection_glyph":null,"view":{"id":"87368"}},"id":"87367","type":"GlyphRenderer"},{"attributes":{},"id":"87391","type":"Selection"},{"attributes":{},"id":"87264","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87408"},"selection_policy":{"id":"87407"}},"id":"87370","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"87369","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87325","type":"VBar"},{"attributes":{"below":[{"id":"87263"}],"center":[{"id":"87266"},{"id":"87270"},{"id":"87329"},{"id":"87335"},{"id":"87341"},{"id":"87347"}],"left":[{"id":"87267"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"87327"},{"id":"87333"},{"id":"87339"},{"id":"87345"}],"title":{"id":"87350"},"toolbar":{"id":"87281"},"toolbar_location":null,"x_range":{"id":"87255"},"x_scale":{"id":"87259"},"y_range":{"id":"87257"},"y_scale":{"id":"87261"}},"id":"87254","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87372","type":"VBar"},{"attributes":{"overlay":{"id":"87279"}},"id":"87273","type":"BoxZoomTool"},{"attributes":{},"id":"87271","type":"ResetTool"},{"attributes":{"children":[[{"id":"87254"},0,0],[{"id":"87290"},0,1]]},"id":"87410","type":"GridBox"},{"attributes":{"data_source":{"id":"87370"},"glyph":{"id":"87371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87372"},"selection_glyph":null,"view":{"id":"87374"}},"id":"87373","type":"GlyphRenderer"},{"attributes":{},"id":"87401","type":"UnionRenderers"},{"attributes":{},"id":"87274","type":"WheelZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"87348","type":"FixedTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"87314","type":"PolyAnnotation"},{"attributes":{},"id":"87255","type":"DataRange1d"},{"attributes":{},"id":"87402","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"87375","type":"Span"},{"attributes":{},"id":"87382","type":"BasicTickFormatter"},{"attributes":{},"id":"87259","type":"LinearScale"},{"attributes":{"axis":{"id":"87263"},"ticker":null},"id":"87266","type":"Grid"},{"attributes":{},"id":"87392","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"87382"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"87264"}},"id":"87263","type":"LinearAxis"},{"attributes":{},"id":"87381","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"87271"},{"id":"87272"},{"id":"87273"},{"id":"87274"},{"id":"87275"},{"id":"87276"},{"id":"87277"},{"id":"87278"}]},"id":"87281","type":"Toolbar"},{"attributes":{},"id":"87257","type":"DataRange1d"},{"attributes":{},"id":"87393","type":"Selection"},{"attributes":{},"id":"87403","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"87280","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"87278","type":"HoverTool"},{"attributes":{},"id":"87404","type":"Selection"},{"attributes":{"overlay":{"id":"87314"}},"id":"87309","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87326","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"87329","type":"Span"},{"attributes":{},"id":"87405","type":"UnionRenderers"},{"attributes":{"source":{"id":"87324"}},"id":"87328","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87331","type":"VBar"},{"attributes":{},"id":"87406","type":"Selection"},{"attributes":{"data_source":{"id":"87324"},"glyph":{"id":"87325"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87326"},"selection_glyph":null,"view":{"id":"87328"}},"id":"87327","type":"GlyphRenderer"},{"attributes":{"source":{"id":"87336"}},"id":"87340","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87332","type":"VBar"},{"attributes":{"source":{"id":"87330"}},"id":"87334","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87389"},"selection_policy":{"id":"87388"}},"id":"87330","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87337","type":"VBar"},{"attributes":{"source":{"id":"87342"}},"id":"87346","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"87347","type":"Span"},{"attributes":{"axis":{"id":"87297"},"ticker":null},"id":"87300","type":"Grid"},{"attributes":{},"id":"87305","type":"ResetTool"},{"attributes":{"data_source":{"id":"87330"},"glyph":{"id":"87331"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87332"},"selection_glyph":null,"view":{"id":"87334"}},"id":"87333","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87391"},"selection_policy":{"id":"87390"}},"id":"87336","type":"ColumnDataSource"},{"attributes":{},"id":"87407","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"87335","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"87397"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"87298"}},"id":"87297","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87338","type":"VBar"},{"attributes":{},"id":"87298","type":"BasicTicker"},{"attributes":{},"id":"87408","type":"Selection"},{"attributes":{"axis_label":"Chain","formatter":{"id":"87396"},"ticker":{"id":"87376"}},"id":"87301","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87343","type":"VBar"},{"attributes":{},"id":"87396","type":"BasicTickFormatter"},{"attributes":{"text":"mu"},"id":"87378","type":"Title"},{"attributes":{"ticks":[0,1,2,3]},"id":"87376","type":"FixedTicker"},{"attributes":{"data_source":{"id":"87336"},"glyph":{"id":"87337"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87338"},"selection_glyph":null,"view":{"id":"87340"}},"id":"87339","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"87301"},"dimension":1,"ticker":null},"id":"87304","type":"Grid"},{"attributes":{"axis_label":"Chain","formatter":{"id":"87381"},"ticker":{"id":"87348"}},"id":"87267","type":"LinearAxis"},{"attributes":{"overlay":{"id":"87313"}},"id":"87307","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87393"},"selection_policy":{"id":"87392"}},"id":"87342","type":"ColumnDataSource"},{"attributes":{},"id":"87397","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"87341","type":"Span"},{"attributes":{},"id":"87277","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"87387"},"selection_policy":{"id":"87386"}},"id":"87324","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"87344","type":"VBar"},{"attributes":{},"id":"87386","type":"UnionRenderers"},{"attributes":{},"id":"87306","type":"PanTool"},{"attributes":{"callback":null},"id":"87312","type":"HoverTool"},{"attributes":{},"id":"87272","type":"PanTool"},{"attributes":{},"id":"87387","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"87305"},{"id":"87306"},{"id":"87307"},{"id":"87308"},{"id":"87309"},{"id":"87310"},{"id":"87311"},{"id":"87312"}]},"id":"87315","type":"Toolbar"},{"attributes":{"axis":{"id":"87267"},"dimension":1,"ticker":null},"id":"87270","type":"Grid"},{"attributes":{"text":"tau"},"id":"87350","type":"Title"},{"attributes":{"data_source":{"id":"87342"},"glyph":{"id":"87343"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"87344"},"selection_glyph":null,"view":{"id":"87346"}},"id":"87345","type":"GlyphRenderer"},{"attributes":{},"id":"87308","type":"WheelZoomTool"},{"attributes":{},"id":"87310","type":"UndoTool"}],"root_ids":["87413"]},"title":"Bokeh Application","version":"2.2.0"}}';
                  var render_items = [{"docid":"17c72a0a-84c3-4c9a-95b1-13fb8469afc9","root_ids":["87413"],"roots":{"87413":"d6f8684c-1eb1-4947-b04f-9a53a0a7bdf7"}}];
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