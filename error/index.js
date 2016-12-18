var $cls;
var $err;
var $errdesc;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

$cls  = getURLParameter("cls");

switch ($cls) {
    case "400":
        $err = "Bad Request";
        $errdesc = "The server could not process the request due to malformed syntax.";
        break;
    case "401":
        $err = "Unauthorized";
        $errdesc = "The request could not be performed without authorization.";
        break;
    case "402":
        $err = "Payment Required";
        $errdesc = "The request could not be performed without payment.";
        break;
    case "403":
        $err = "Forbidden";
        $errdesc = "The request could not be performed due to wrong permissions.";
        break;
    case "404":
        $err = "Not Found";
        $errdesc = "The requested resource could be found.";
        break;
    case "405":
        $err = "Method not allowed";
        $errdesc = "The used request method is not supported by the requested resource.";
        break;
    case "406":
        $err = "Not Acceptable";
        $errdesc = "The requested resource is not capable of generating content acceptable according to the request.";
        break;
    case "407":
        $err = "Proxy Authentication Required";
        $errdesc = "The requested resource is only available after authenticating with the proxy.";
        break;
    case "408":
        $err = "Request Time-out";
        $errdesc = "The request took too long for the server, please check your internet connection";
        break;
    case "409":
        $err = "Gone";
        $errdesc = "The requested resource is not available anymore.";
        break;
    case "414":
        $err = "URI Too Long";
        $errdesc = "The requested URL was too long.";
        break;
    case "426":
        $err = "Upgrade Required";
        $errdesc = "Please update your browser or switch to a supported one (Chrome, Firefox, Safari, Opera).";
        break;
    case "429":
        $err = "Too Many Requests";
        $errdesc = "The maximum amount of requests per time has been reached.";
        break;
    case "500":
        $err = "Internal Server Error";
        $errdesc = "Unknown Server Error. That's all we know.";
        break;
    case "501":
        $err = "Not Implemented";
        $errdesc = "The server could not fulfill the reuqest due to missing functions, though this may become available in the future.";
        break;
    case "502":
        $err = "Bad Gateway";
        $errdesc = "The server was acting as a gateway or proxy and received an invalid response from the upstream server.";
        break;
    case "508":
        $err = "Loop  Detected";
        $errdesc = "The server detected an infinite loop while processing the request";
        break;
}

function setTexts() {
    // set the Title //

    document.title = "Error " + $cls + ": " + $err;

    // set the Error Name //

    document.getElementById("error").innerHTML = "Error " + $cls + ": " + $err;

    // set the Error Description //

    document.getElementById("errordesc").innerHTML = $errdesc;

}
