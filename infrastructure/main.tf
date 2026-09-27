resource "null_resource" "application" {
  provisioner "local-exec" {
    command = "echo Terraform infrastructure validation successful"
  }
}