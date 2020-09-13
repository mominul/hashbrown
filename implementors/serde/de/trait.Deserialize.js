(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;'de, K, V, S&gt; Deserialize&lt;'de&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Deserialize&lt;'de&gt; + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de, T, S&gt; Deserialize&lt;'de&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt; + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()