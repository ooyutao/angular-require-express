/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices"], function (app) {

    app.controller("contCtrl", function ($scope, getCtrl,$location) {

        getCtrl.getData({//����
            type: "GET",
            url: "/booksId/" + $location.search().id
        }).success(function (res) {//���
            console.log(res);
            if(res.error_code == 0){
                $scope.data = res.result[0];
            }else{
                alert(res.reason);
            }

        }).error(function () {//���籨��
            alert("��������ʧ�ܣ�");
        })

    });

});

