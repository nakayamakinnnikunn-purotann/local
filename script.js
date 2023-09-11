// ページが読み込まれたときに実行される関数
document.addEventListener("DOMContentLoaded", function () {
    // 通知の設定
    if (!("Notification" in window)) {
        alert("このブラウザは通知をサポートしていません。");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                // 通知ボタンがクリックされたときの処理
                document.getElementById("notifyButton").addEventListener("click", function () {
                    var notification = new Notification("ローカル通知", {
                        body: "ボタンがクリックされました！",
                        icon: "icon.png" // 通知のアイコン（任意）
                    });
                });
            } else {
                alert("通知が許可されていません。");
            }
        });
    }
});
