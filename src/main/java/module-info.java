module com.example.spaceshooterproject {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.spaceshooterproject to javafx.fxml;
    exports com.example.spaceshooterproject;
}