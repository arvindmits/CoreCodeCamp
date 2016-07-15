"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// fileUploadService.ts
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var FileUploadService = (function () {
    function FileUploadService(http) {
        this.http = http;
    }
    FileUploadService.prototype.uploadFile = function (file, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            var formData = new FormData();
            formData.append("file", file, file.name);
            xhr.send(formData);
        });
    };
    FileUploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=fileUploadService.js.map