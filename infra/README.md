# Deploy Portfolio Website

The terraform configuration files within this directory allow for the automatic configuration of the AWS services necessary to run my app online.

## Prereqs

This project assumes that you already have an AWS account which has been configured with the AWS CLI. It assumes that you already own a domain, and possess a Route53 Hosted Zone for it.

To configure this file, you must create a file `terraform.tfvars` in _this_ directory, which contains the following:

```
route_53_hosted_zone_id = "<your_hosted_zone_id>"
```

## Resources:

### cert.tf

Creates the certificate in order to encrypt communication between client and server. The certificate is valid for `bigdevdog.com` _as well as_ `www.bigdevdog.com`. This file also creates an `aws_acm_certificate_validation` so that it can be assured that the certificates are issued before relying upon them.

### cloudfront_distro.tf

Creates a cloudfront distribution for the website. Create A records that will point to it, both from `bigdevdog.com` and `www.bigdevdog.com`.

### iam.tf

Create an IAM role for GitHub actions to use. Part of our CI/CD pipeline is to invalidate the CloudFront distro's cache, so that the changes are seen by site visitors immediately. This requires a special IAM role which allows cache invalidation and nothing else.

### s3_bucket.tf

Create an S3 bucket to host the code files. Allow public access and for it to configure itself as a website.
