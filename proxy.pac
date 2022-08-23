// The deployment of this file is described in the README of this repository
//
// see also:
// https://git.cronn.de/cronn/wiki/wikis/ssh-tunnel#step-8
// https://yam.telekom.de/docs/DOC-475127
// http://pac.t-systems.com:3132/proxy.pac

function FindProxyForURL(url, host) {

    var useProxy = 'SOCKS 127.0.0.1:2000; SOCKS5 127.0.0.1:2000';

    if (shExpMatch(host, "*devlab.de.tmo")) {
        return useProxy;
    }

    if (shExpMatch(host, "*devops.telekom.de")) {
        // MagentaCICD
        if (host.startsWith("devops.telekom.de") ||
            host.startsWith("mtr.devops.telekom.de") ||
            host.startsWith("auth.devops.telekom.de") ||
            host.startsWith("c4.pages.devops.telekom.de") ||
            host.startsWith("artifactory.devops.telekom.de") ||
            host.startsWith("docs.devops.telekom.de") ||
            host.startsWith("gitlab.devops.telekom.de")) {
            return useProxy;
        } else {
            // Telekom Workbench, etc.
            return useProxy;
        }
    }

    if (shExpMatch(host, "*.dina.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.detemobil.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "owa*.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "yam.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*video.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "psa-portal.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "wiki.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*mywiki.confluence.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "mywiki.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "it.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*login.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "o365sts.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "e20a-login.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.otc.t-systems.com")) {
        return "DIRECT";
    }

    if (shExpMatch(host, "kundenservice.mh.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.t-systems.com")) {
        return useProxy;
    }

    if (shExpMatch(host, "*krf.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.ei-testcenter.tmo")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.t-internal.com")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.zspi.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "secjumpprod.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "access-otp.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "cmot.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "cmot-master.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*caas*.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "zam.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "topedia.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "soabp*.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.corp.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "mycard-portal.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.one-erp.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "HE103050.emea1.cds.t-internal.com")) {
        return useProxy;
    }

    if (shExpMatch(host, "developer.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*.dhei.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "fed.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "api.idm.intra.t-online.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "orgit.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "amk-prod-vip.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "cloudsuite.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "*gkv-som.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "codeshare.workbench.telekom.de")) {
        return useProxy;
    }

    if (shExpMatch(host, "fiat.telekom.de")) {
        return useProxy;
    }

    return "DIRECT";
}
