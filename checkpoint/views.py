from django.shortcuts import render, redirect
from backstage.models import UserInfo
from django.contrib.auth import login, authenticate


def getlogin(request):
    title = '后台管理系统-登录'
    if request.method == 'POST':
        name = request.POST.get('username')
        password = request.POST.get('userpassword')
        try:
            user = UserInfo.objects.get(username=name)
        except Exception as e:
            print(e)
            user = False
        if user:
            checkPassword = authenticate(username=name, password=password)
            if checkPassword:
                if checkPassword.is_active:
                    login(request, checkPassword)
                    tips = "登录成功"
                    return redirect('backstage/')
                else:
                    tips = "请先激活用户"
            else:
                tips = "密码错误"
        else:
            tips = '用户不存在'
    else:
        crruentUser = request.user.username
        if str(crruentUser):
            if UserInfo.objects.get(username=crruentUser).is_active:
                return redirect('backstage/')
    return render(request, 'checkpoint.html', locals())


def getregister(request):
    title = '后台管理系统-注册'
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        repassword = request.POST.get('repassword')
        user = UserInfo.objects.all()
        if len(name) > 0 and len(email) > 0 and len(password) > 0 and len(repassword) > 0:
            if repassword == password:
                if len(password) >= 6:
                    if len(name) > 15:
                        tips = "用户名不能超过15个字符"
                    else:
                        if len(user.filter(username=name)) > 0:
                            tips = "用户名已存在"
                        else:
                            if len(user.filter(email=email)) > 0:
                                tips = "邮箱已被注册"
                            else:
                                try:
                                    UserInfo.objects.create_user(username=name, email=email, password=password)
                                    tips = "注册成功"
                                except Exception as e:
                                    print(e)
                                    tips = "注册失败"
                else:
                    tips = "密码太短，请输入 6 位或 6 位以上的密码"
            else:
                tips = "两次密码不一致"
        else:
            tips = "所有内容都不能为空"
    return render(request, 'signup.html', locals())


def getforget(request):
    title = '后台管理系统-找回密码'
    return render(request, 'forget.html', {'title': title})