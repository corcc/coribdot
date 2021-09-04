FROM archlinux:latest
EXPOSE 80
EXPOSE 443
USER root
RUN ["pacman","--noconfirm","-Syu","jdk-openjdk","maven"]
VOLUME [ "/data" ]
WORKDIR /data
ENV JAVA_HOME=/usr/lib/jvm/default-runtime
CMD [ "mvn","-B","package","--file","pom.xml" ]
