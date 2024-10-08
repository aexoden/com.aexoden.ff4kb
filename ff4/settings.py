# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

"""
Django settings for ff4 project.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

from pathlib import Path
from socket import gethostbyname_ex, gethostname
from typing import Any, ClassVar, cast

from configurations import Configuration, values  # type: ignore
from django.core.management.utils import get_random_secret_key


class Common(Configuration):
    # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
    BASE_DIR = str(Path(__file__).absolute().parent.parent)

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = cast(values.BooleanValue, values.BooleanValue(False))  # noqa: FBT003

    ALLOWED_HOSTS = cast(values.ListValue, values.ListValue(["ff4kb.aexoden.com"], environ_name="ALLOWED_HOSTS"))

    ALLOWED_HOSTS.append(gethostname())  # type: ignore
    ALLOWED_HOSTS.extend(list(set(gethostbyname_ex(gethostname())[2])))  # type: ignore

    # Application definition
    INSTALLED_APPS: ClassVar[list[str]] = [
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles",
        "django_extensions",
        "django_bootstrap_breadcrumbs",
        "ff4.guides",
        "ff4.info",
        "ff4.routes",
        "ff4.tools",
    ]

    MIDDLEWARE: ClassVar[list[str]] = [
        "django.middleware.security.SecurityMiddleware",
        "whitenoise.middleware.WhiteNoiseMiddleware",
        "django.contrib.sessions.middleware.SessionMiddleware",
        "django.middleware.common.CommonMiddleware",
        "django.middleware.csrf.CsrfViewMiddleware",
        "django.contrib.auth.middleware.AuthenticationMiddleware",
        "django.contrib.messages.middleware.MessageMiddleware",
        "django.middleware.clickjacking.XFrameOptionsMiddleware",
    ]

    ROOT_URLCONF = "ff4.urls"

    TEMPLATES: ClassVar[list[dict[str, Any]]] = [
        {
            "BACKEND": "django.template.backends.django.DjangoTemplates",
            "DIRS": [str(Path(BASE_DIR) / "ff4" / "templates")],
            "APP_DIRS": True,
            "OPTIONS": {
                "context_processors": [
                    "django.template.context_processors.debug",
                    "django.template.context_processors.request",
                    "django.contrib.auth.context_processors.auth",
                    "django.contrib.messages.context_processors.messages",
                ],
            },
        },
    ]

    WSGI_APPLICATION = "ff4.wsgi.application"

    # Database
    # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
    DATABASES = cast(
        values.DatabaseURLValue, values.DatabaseURLValue("sqlite:///{}".format(str(Path(BASE_DIR) / "db.sqlite3")))
    )

    # Password validation
    # https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators
    AUTH_PASSWORD_VALIDATORS: ClassVar[list[dict[str, str]]] = [
        {
            "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
        },
        {
            "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
        },
        {
            "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
        },
        {
            "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
        },
    ]

    # Internationalization
    # https://docs.djangoproject.com/en/2.0/topics/i18n/
    LANGUAGE_CODE = "en-us"

    TIME_ZONE = "UTC"

    USE_I18N = True

    USE_L10N = True

    USE_TZ = True

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/2.0/howto/static-files/
    STATIC_ROOT = str(Path(BASE_DIR) / "static")
    STATIC_URL = "/static/"

    STATICFILES_DIRS: ClassVar[list[str]] = [str(Path(BASE_DIR) / "ff4" / "static")]


class Build(Common):
    SECRET_KEY = get_random_secret_key()


class Run(Common):
    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = cast(values.SecretValue, values.SecretValue())


class Development(Run):
    BASE_DIR = str(Path(__file__).absolute().parent.parent)
    DOTENV = str(Path(BASE_DIR) / ".env")

    DEBUG = True

    ALLOWED_HOSTS: ClassVar[list[str]] = []

    INTERNAL_IPS: ClassVar[list[str]] = ["127.0.0.1"]

    INSTALLED_APPS: ClassVar[list[str]] = [*Common.INSTALLED_APPS, "debug_toolbar"]

    MIDDLEWARE: ClassVar[list[str]] = [*Common.MIDDLEWARE, "debug_toolbar.middleware.DebugToolbarMiddleware"]


class Testing(Run):
    pass


class Staging(Run):
    # Security
    SESSION_COOKIE_SECURE = cast(values.BooleanValue, values.BooleanValue(True))  # noqa: FBT003
    SECURE_BROWSER_XSS_FILTER = cast(values.BooleanValue, values.BooleanValue(True))  # noqa: FBT003
    SECURE_CONTENT_TYPE_NOSNIFF = cast(values.BooleanValue, values.BooleanValue(True))  # noqa: FBT003
    SECURE_HSTS_INCLUDE_SUBDOMAINS = cast(values.BooleanValue, values.BooleanValue(True))  # noqa: FBT003
    SECURE_HSTS_SECONDS = cast(values.IntegerValue, values.IntegerValue(31536000))
    SECURE_REDIRECT_EXEMPT = cast(values.ListValue, values.ListValue([]))
    SECURE_SSL_HOST = cast(values.Value, values.Value(None))
    SECURE_SSL_REDIRECT = cast(values.BooleanValue, values.BooleanValue(True))  # noqa: FBT003
    SECURE_PROXY_SSL_HEADER = cast(values.TupleValue, values.TupleValue(("HTTP_X_FORWARDED_PROTO", "https")))


class Production(Staging):
    pass
