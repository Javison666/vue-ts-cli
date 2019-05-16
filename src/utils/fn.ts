import Fn from 'jj-browser-fn/main.js';

class ProjFn {

}

(ProjFn.prototype as any).__proto__ = Fn.prototype
export default new ProjFn() as any


