/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices","my97"], function (app) {

    app.controller("showDataCtrl", function ($scope, $http, getCtrl) {
        $scope.urlData = "";

        $scope.sousuo = function(){
            if($scope.urlData == ""){
                alert("ѡ������!");
                return false;
            }
            getCtrl.getData({//����
                type: "GET",
                url: "/booksService/" + $scope.urlData
            }).success(function (res) {//���
                console.log(res);
                if(res.error_code == 0){
                    $scope.data = res.result;
                }else{
                    alert(res.reason);
                }
            }).error(function () {//���籨��
                alert("��������ʧ�ܣ�");
            })
        }

    });

});

