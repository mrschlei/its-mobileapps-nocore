FROM drupal7-cosign:latest

COPY . /var/www/html/
# Section that sets up Apache and Cosign to run as non-root user.
EXPOSE 8080
EXPOSE 8443

### change directory owner, as openshift user is in root group.
#RUN chown -R root:root /var/www/html /var/log/apache2 /var/lock/apache2 \
#	/var/run/apache2 /usr/local/etc/php /usr/local/lib/php

RUN chown -R root:root /usr/local/etc/php /usr/local/lib/php \
	/var/log/apache2 /var/lock/apache2 /var/run/apache2 \
	/var/www/html

RUN mkdir -p /var/www/html/sites/default/ 
	
### Modify perms for the openshift user, who is not root, but part of root group.
RUN chmod -R g+r /var/www/html
#RUN chmod -R g+rw /var/log/apache2 /var/www/html /etc/apache2 \
#	/etc/ssl/certs /etc/ssl/private /etc/apache2/mods-enabled /etc/apache2/sites-enabled \
# 	/etc/apache2/sites-available /etc/apache2/mods-available \
# 	/var/lib/apache2/module/enabled_by_admin /var/lib/apache2/site/enabled_by_admin \
## 	/var/lock/apache2 /var/run/apache2 /usr/local/etc/php \
# 	 /usr/local/lib/php
RUN chmod -R g+rw /etc/apache2 /etc/apache2/mods-available \
	/etc/apache2/mods-enabled /etc/apache2/sites-available\
	/etc/apache2/sites-enabled /etc/ssl/certs /etc/ssl/private \
	/usr/local/etc/php /usr/local/lib/php \
	/var/lib/apache2/module/enabled_by_admin \ 
	/var/lib/apache2/site/enabled_by_admin \
	/var/lock/apache2 /var/log/apache2 /var/run/apache2\
	/var/www/html

RUN chmod g+x /etc/ssl/private

## Oracle packages and directories
RUN apt-get install libaio1 libaio-dev gzip zip make
RUN mkdir /etc/oracle /opt/oracle /usr/lib/oracle
RUN chmod -R g+w /etc/oracle /opt/oracle /usr/lib/oracle
COPY instantclient-basic-linux.x64-12.2.0.1.0.zip /var/www/html

COPY start.sh /usr/local/bin
RUN chmod 755 /usr/local/bin/start.sh
CMD /usr/local/bin/start.sh
