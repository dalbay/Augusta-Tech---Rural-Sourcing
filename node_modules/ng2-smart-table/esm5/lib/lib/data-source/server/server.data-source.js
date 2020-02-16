import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';
import { map } from 'rxjs/operators';
var ServerDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new ServerSourceConf(conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements()
            .pipe(map(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        })).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.body;
        var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        var httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    };
    ServerDataSource.prototype.createRequesParams = function () {
        var httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    };
    ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
        var _this = this;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
        var _this = this;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    };
    ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    };
    return ServerDataSource;
}(LocalDataSource));
export { ServerDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmRhdGEtc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9zZXJ2ZXIvc2VydmVyLmRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFBc0MsNENBQWU7SUFNbkQsMEJBQXNCLElBQWdCLEVBQUUsSUFBZ0M7UUFBaEMscUJBQUEsRUFBQSxTQUFnQztRQUF4RSxZQUNFLGlCQUFPLFNBT1I7UUFScUIsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFLckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG1GQUFtRixDQUFDLENBQUM7U0FDdEc7O0lBQ0gsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFO2FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1gsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFH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LE9BQU8sQ0FBQyxVQUFDLFNBQWM7Z0JBQzdDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN2QixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNuSDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVMsZ0RBQXFCLEdBQS9CLFVBQWdDLFVBQXNCO1FBRXBELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdFLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNsRjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE1R0QsQ0FBc0MsZUFBZSxHQTRHcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuLi9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTZXJ2ZXJTb3VyY2VDb25mIH0gZnJvbSAnLi9zZXJ2ZXItc291cmNlLmNvbmYnO1xuaW1wb3J0IHsgZ2V0RGVlcEZyb21PYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgU2VydmVyRGF0YVNvdXJjZSBleHRlbmRzIExvY2FsRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIGNvbmY6IFNlcnZlclNvdXJjZUNvbmY7XG5cbiAgcHJvdGVjdGVkIGxhc3RSZXF1ZXN0Q291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsIGNvbmY6IFNlcnZlclNvdXJjZUNvbmYgfCB7fSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY29uZiA9IG5ldyBTZXJ2ZXJTb3VyY2VDb25mKGNvbmYpO1xuXG4gICAgaWYgKCF0aGlzLmNvbmYuZW5kUG9pbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3QgZW5kUG9pbnQgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYSBjb25maWd1cmF0aW9uIG9mIHRoZSBzZXJ2ZXIgZGF0YSBzb3VyY2UuJyk7XG4gICAgfVxuICB9XG5cbiAgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVxdWVzdENvdW50O1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0RWxlbWVudHMoKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiB7XG4gICAgICAgIHRoaXMubGFzdFJlcXVlc3RDb3VudCA9IHRoaXMuZXh0cmFjdFRvdGFsRnJvbVJlc3BvbnNlKHJlcyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZXh0cmFjdERhdGFGcm9tUmVzcG9uc2UocmVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgfSkpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGFycmF5IG9mIGRhdGEgZnJvbSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHJlc1xuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKi9cbiAgcHJvdGVjdGVkIGV4dHJhY3REYXRhRnJvbVJlc3BvbnNlKHJlczogYW55KTogQXJyYXk8YW55PiB7XG4gICAgY29uc3QgcmF3RGF0YSA9IHJlcy5ib2R5O1xuICAgIGNvbnN0IGRhdGEgPSAhIXRoaXMuY29uZi5kYXRhS2V5ID8gZ2V0RGVlcEZyb21PYmplY3QocmF3RGF0YSwgdGhpcy5jb25mLmRhdGFLZXksIFtdKSA6IHJhd0RhdGE7XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYERhdGEgbXVzdCBiZSBhbiBhcnJheS5cbiAgICBQbGVhc2UgY2hlY2sgdGhhdCBkYXRhIGV4dHJhY3RlZCBmcm9tIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgYnkgdGhlIGtleSAnJHt0aGlzLmNvbmYuZGF0YUtleX0nIGV4aXN0cyBhbmQgaXMgYXJyYXkuYCk7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdG90YWwgcm93cyBjb3VudCBmcm9tIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogTG9va3MgZm9yIHRoZSBjb3VudCBpbiB0aGUgaGVkZXJzIGZpcnN0LCB0aGVuIGluIHRoZSByZXNwb25zZSBib2R5XG4gICAqIEBwYXJhbSByZXNcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIHByb3RlY3RlZCBleHRyYWN0VG90YWxGcm9tUmVzcG9uc2UocmVzOiBhbnkpOiBudW1iZXIge1xuICAgIGlmIChyZXMuaGVhZGVycy5oYXModGhpcy5jb25mLnRvdGFsS2V5KSkge1xuICAgICAgcmV0dXJuICtyZXMuaGVhZGVycy5nZXQodGhpcy5jb25mLnRvdGFsS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmF3RGF0YSA9IHJlcy5ib2R5O1xuICAgICAgcmV0dXJuIGdldERlZXBGcm9tT2JqZWN0KHJhd0RhdGEsIHRoaXMuY29uZi50b3RhbEtleSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlcXVlc3RFbGVtZW50cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBodHRwUGFyYW1zID0gdGhpcy5jcmVhdGVSZXF1ZXNQYXJhbXMoKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmYuZW5kUG9pbnQsIHsgcGFyYW1zOiBodHRwUGFyYW1zLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZVJlcXVlc1BhcmFtcygpOiBIdHRwUGFyYW1zIHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICBodHRwUGFyYW1zID0gdGhpcy5hZGRTb3J0UmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zKTtcbiAgICBodHRwUGFyYW1zID0gdGhpcy5hZGRGaWx0ZXJSZXF1ZXN0UGFyYW1zKGh0dHBQYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmFkZFBhZ2VyUmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRTb3J0UmVxdWVzdFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zKTogSHR0cFBhcmFtcyB7XG4gICAgaWYgKHRoaXMuc29ydENvbmYpIHtcbiAgICAgIHRoaXMuc29ydENvbmYuZm9yRWFjaCgoZmllbGRDb25mKSA9PiB7XG4gICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYuc29ydEZpZWxkS2V5LCBmaWVsZENvbmYuZmllbGQpO1xuICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQodGhpcy5jb25mLnNvcnREaXJLZXksIGZpZWxkQ29uZi5kaXJlY3Rpb24udG9VcHBlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRGaWx0ZXJSZXF1ZXN0UGFyYW1zKGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMpOiBIdHRwUGFyYW1zIHtcblxuICAgIGlmICh0aGlzLmZpbHRlckNvbmYuZmlsdGVycykge1xuICAgICAgdGhpcy5maWx0ZXJDb25mLmZpbHRlcnMuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkQ29uZlsnc2VhcmNoJ10pIHtcbiAgICAgICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQodGhpcy5jb25mLmZpbHRlckZpZWxkS2V5LnJlcGxhY2UoJyNmaWVsZCMnLCBmaWVsZENvbmZbJ2ZpZWxkJ10pLCBmaWVsZENvbmZbJ3NlYXJjaCddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZXJSZXF1ZXN0UGFyYW1zKGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMpOiBIdHRwUGFyYW1zIHtcblxuICAgIGlmICh0aGlzLnBhZ2luZ0NvbmYgJiYgdGhpcy5wYWdpbmdDb25mWydwYWdlJ10gJiYgdGhpcy5wYWdpbmdDb25mWydwZXJQYWdlJ10pIHtcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCh0aGlzLmNvbmYucGFnZXJQYWdlS2V5LCB0aGlzLnBhZ2luZ0NvbmZbJ3BhZ2UnXSk7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQodGhpcy5jb25mLnBhZ2VyTGltaXRLZXksIHRoaXMucGFnaW5nQ29uZlsncGVyUGFnZSddKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgfVxufVxuIl19