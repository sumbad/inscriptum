export class Router {
    mode: any = null;
    root = '/';
    routes: any = [];

    config(options) {
        this.mode = options && options.mode && options.mode == 'history'
            && !!(history.pushState) ? 'history' : 'hash';

        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';

        return this;
    }


    getFragment() {
        var fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    }


    clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }


    add(re, handler) {
        if (typeof re == 'function') {
            handler = re;
            re = '';
        }
        this.routes.push({ re: re, handler: handler });
        return this;
    }


    remove(param) {
        for (var i = 0, r; i < this.routes.length, r = this.routes[i]; i++) {
            if (r.handler === param || r.re.toString() === param.toString()) {
                this.routes.splice(i, 1);
                return this;
            }
        }
        return this;
    }
}