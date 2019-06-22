export const vdtVal = {
    imgCode: {
        empty: "请输入验证码",
        wrong: "验证码不正确"
    },
    phone: {
        empty: "请填写手机号",
        wrong: "手机号格式不符"
    },
    smsCode: {
        empty: "请输入手机短信验证码",
        wrong: "手机短信验证码应该为6位数字"
    },
    email: {
        empty: "请输入邮箱",
        wrong: "邮箱格式不正确"
    }
}

export const vdtFn = {
    sendRes(bool: boolean, str?: string) { // 返回信息
        return {
            res: bool,
            msg: str
        }
    },
    checkEmpty(val: any) { // 校验空值
        if (val.toString().trim() === "") {
            return true;
        } else {
            return false;
        }
    },
    email(val) { // 邮箱校验
        if (vdtFn.checkEmpty(val)) {
            return vdtFn.sendRes(false, vdtVal.email.empty);
        }
        if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(val.trim())) {
            return vdtFn.sendRes(false, vdtVal.email.wrong);
        } else {
            return vdtFn.sendRes(true);
        }
    },
    smsCode(val) {
        if (vdtFn.checkEmpty(val)) {
            return vdtFn.sendRes(false, vdtVal.smsCode.empty);
        }
        if (/\d{6}/.test(val.trim())) {
            return vdtFn.sendRes(true);
        } else {
            return vdtFn.sendRes(false, vdtVal.smsCode.wrong);
        }
    },
    imgCode(val) {
        if (vdtFn.checkEmpty(val)) {
            return vdtFn.sendRes(false, vdtVal.imgCode.empty);
        }
        if (val.trim().length !== 4) {
            return vdtFn.sendRes(false, vdtVal.imgCode.wrong);
        } else {
            return vdtFn.sendRes(true);
        }
    }
}

export default vdtFn;
